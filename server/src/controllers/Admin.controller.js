import ApiError from "../utilities/Apierror.js";
import asyncHandler from "../utilities/asynchandler.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";
import { admin } from "../db/models/adminmodel.js";
import { sendOTP} from "../utilities/otpservice.js";
import { generateOTP } from "../utilities/otpservice.js";

const options={
    httpOnly: true,
    secure: true
}
const generateaccesstokenandrefreshtoken= async(userId)=>{
    try {
  
       const Admins=  await admin.findById(userId);
       const accesstoken= await Admins.generateAccesstokens();
       const refreshtoken= await Admins.generateRefreshTokens();
       console.log(accesstoken);
       console.log(refreshtoken);
      Admins.refreshtoken=refreshtoken;
        await Admins.save({validateBeforeSave:false})
      return {accesstoken,refreshtoken};
      
      
    } catch (error) {
       console.error("Error generating tokens:", error);
       throw new ApiError(403," Sorry to say tokens not generated");
    }
   }



   const RegisterAdmin = asyncHandler(async (req, res) => {
    try {
   
      
  
      const { username, password, email, phoneNumber, otp } = req.body;
  
     
  
        if ([username, password, email, phoneNumber].some((field) => !field?.trim())) {
        throw new ApiError(400, "All fields must be filled");
      }
  
      // Email validation
      if (!validator.isEmail(email)) {
        throw new ApiError(400, "Invalid email format");
      }
  
      // Phone number validation (basic)
      if (!validator.isMobilePhone(phoneNumber, "any")) {
        throw new ApiError(400, "Invalid phone number format");
      }
  
      // Check if startup already exists
      const existed = await admin.findOne({
        $or: [{ username }, { email }, { phoneNumber }],
      });
  
      if (existed) {
        throw new ApiError(401, "Admin already registered");
      }
  
      // Verify OTP
      if (!otp || otp !== req.session.otp || phoneNumber !== req.session.phoneNumber) {
        throw new ApiError(400, "Invalid or expired OTP");
      }
  
      
      const newAdmin = await admin.create({
        username,
        password,
        email,
        phoneNumber,
       
      });
  
      const createdAdmin = await admin
        .findById(newAdmin._id)
        .select("-password -refreshtoken");
  
      if (!createdAdmin) {
        throw new ApiError(500, "Something went wrong during registration");
      }
  
      // Clear session OTP
      req.session.destroy();
  
      return res.status(200).json({ createdAdmin });
    } catch (error) {
      console.error("Registration Error:", error);
  
      if (error.name === "MongoServerError" && error.message.includes("FieldPath")) {
        throw new ApiError(500, "Database error: Invalid field path");
      }
  
      throw new ApiError(500, error.message || "Internal server error");
    }
  });
  const SendOTP = asyncHandler(async (req, res) => {
    const { phoneNumber } = req.body;
  
    if (!validator.isMobilePhone(phoneNumber, "any")) {
      throw new ApiError(400, "Invalid phone number format");
    }
  
    const otp = generateOTP();
    req.session.otp = otp;
    req.session.phoneNumber = phoneNumber;
  
    console.log(`Your OTP is: ${otp}`); // Replace with SMS service
    await sendOTP(phoneNumber, otp);
  
    res.json({ message: "OTP sent successfully" });
  });

    // login admin
    const Adminlogin=asyncHandler(async(req,res,next)=>{
    const{email,password,username}= req.body;
    //TO CHECK WHETHER THE USER HAS FILLED THE CREDENTIALS//
if(

    [username,email].some((ironman)=>{
 return ironman?.trim()==="" })
)
{

    throw new ApiError(403," fill the credentials")
}
// get the user from database an instance
const Admin= await admin.findOne({
    $or:[{username},{email}],
});
if(!Admin){
    throw new ApiError(404,"NOT REGISTERED ,FIRST REGISTER");
}
// check the password
 const ispasswordvalid =await Admin.isPassword(password);
 if(!ispasswordvalid){

    throw new ApiError(403,"incorrect pasword,try again");
 }
const {accesstoken,refreshtoken}=  await generateaccesstokenandrefreshtoken(Admin._id);
const loggedinuser= admin.findById(admin._id).select("-password -refreshtoken");

return res.status(200).cookie("AccessToken",options).cookie("RefreshToken",options).json({ message:"User logged in sucsessfully",accesstoken,refreshtoken,Admin});
})
// admin logout//
const Adminlogout=asyncHandler(async(req,res,next)=>{
    
        await admin.findByIdAndUpdate(
            req.user?._id,
            {
        $set:{refreshtoken:undefined}
        
            },  {new:true}
        )
        return res.status(200).clearCookie("AccessToken",options).clearCookie("RefreshToken",options).json({Adminlogout,message:"logged out"})
        })

        const refreshaccesstoken= asyncHandler(async(req,res,next)=>{
            try {
                const incomingrefreshtoken= req.cookies?.RefreshToken|| req.body?.refreshtoken
                console.log(incomingrefreshtoken);
            
                if(!incomingrefreshtoken){
                    throw new ApiError(404,"unauthorized request");
                }
                const decoded= jwt.verify(incomingrefreshtoken,process.env.JWT_SECRET);
                const Admin= await admin.findById(decoded?._id);
                if(!Admin){
                    throw new ApiError(406,"invalid refreshtoken")
                }
                // check if it s not expired//
                if(incomingrefreshtoken!==Admin?.refreshtoken){
                    throw new ApiError(402,"refresh token expired");
                  
                    
                }
                 const {accesstoken,refreshtoken}=await generateaccesstokenandrefreshtoken(Admin._id);
                 return res.status(200).cookie("AccessToken",accesstoken,options).cookie("RefreshToken",refreshtoken,options).json({message:"tokens refreshed"})
                
            } catch (error) {
                console.error(error);
                throw new ApiError(404, " Tokens cant be regenerated");
            }
            })
            
            
            
          
            
            // Step 1: Request Password Reset
          const forgotpassword =asyncHandler( async (req, res) => {
                const { email,username } = req.body;
                const Admin = await admin.findOne({
                    $or: [{ email }, { username }],
                  });
                if (!Admin) {
                    throw new ApiError(404,"User does not exist")
                }
            
                const resetToken = crypto.randomBytes(32).toString('hex');
                Admin.resetPasswordToken = resetToken;
                Admin.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiry
                await Admin.save();
            
                const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
            
                // Email setup
                const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: { Admin: '', pass: '' }
                });
            
                await transporter.sendMail({
                    to: email,
                    subject: 'Password Reset Request',
                    html: `<h3>Reset your password</h3><p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
                });
            
               return res.status(200).json({message:"Password reset link sent"});
            });
            
            // Step 2: Verify Token
          const verifytoken=asyncHandler( async (req, res) => {
                const Admin = await admin.findOne({
                    resetPasswordToken: req.params.token,
                    resetPasswordExpires: { $gt: Date.now() }
                });
            
                if (!Admin) {
                    throw new ApiError(401,"INVALID TOKEN")
                }
                res.json({ message: 'Token verified' });
            });
            
            // Step 3: Reset Password
          const resetpasswordtoken= asyncHandler( async (req, res) => {
                const { password } = req.body;
                const Admin = await admin.findOne({
                    resetPasswordToken: req.params.token,
                    resetPasswordExpires: { $gt: Date.now() }
                });
            
                if (!Admin) {
                    throw new ApiError(403," invalid or token expired");
                }
            
                const salt = await bcrypt.genSalt(10);
                Admin.password = await bcrypt.hash(password, salt);
                Admin.resetPasswordToken = undefined;
                Admin.resetPasswordExpires = undefined;
                await Admin.save();
            
                return res.status(200).json({ message: 'Password reset successful' });
            });
            
            const changeAdminPasswordAtLogin = asyncHandler(async (req, res, next) => {
                try {
                  const { password, newpassword, confirmedpassword } = req.body;
                
                  if (newpassword !== confirmedpassword) {
                    throw new ApiError(401, "Password confirmation doesn't match");
                  }
                
                  // 🎯 Corrected: Use `req.user` instead of `req.startup`
                  const Admin = req.user;
                
                  if (!Admin || req.userType !== "admin") {
                    throw new ApiError(403, "Access denied: Admin only");
                  }
                  
                  // ✅ Check old password
                  const isPasswordCorrect = await Admin.isPassword(password);
                
                  if (!isPasswordCorrect) {
                     
                    throw new ApiError(404, "Wrong old password");
                  }
                
                  // 🔒 Set new password and save
                Admin.password = newpassword;
                  await Admin.save({ validateBeforeSave: false });
                
                  return res.status(200).json({ message: "Password changed successfully for logged-in user" });
               
                 }catch (error) {
                 console.log(error);
             }
         });
                
              
            
              


    export {RegisterAdmin,Adminlogin,Adminlogout,refreshaccesstoken,forgotpassword,resetpasswordtoken,verifytoken,changeAdminPasswordAtLogin};