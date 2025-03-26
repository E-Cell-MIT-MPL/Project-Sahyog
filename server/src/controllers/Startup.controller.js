import ApiError from "../utilities/Apierror.js";
import { admin } from "../db/models/adminmodel.js";
import { startup } from "../db/models/startupModel.js";
import asyncHandler from "../utilities/asynchandler.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import { generateOTP } from "../utilities/otpservice.js";
import { sendOTP } from "../utilities/otpservice.js";


const options={
    httpOnly: true,
    secure: true
}
const generateaccesstokenandrefreshtoken= async(userId)=>{
    try {
  
       const Startup=  await startup.findById(userId);
       const accesstoken= await Startup.generateAccesstokens();
       const refreshtoken= await Startup.generateRefreshTokens();
       console.log(accesstoken);
       console.log(refreshtoken);
     Startup.refreshtoken=refreshtoken;
        await Startup.save({validateBeforeSave:false})
      return {accesstoken,refreshtoken};
      
      
    } catch (error) {
       console.error("Error generating tokens:", error);
       throw new ApiError(403," Sorry to say tokens not generated");
    }
   }
  




const RegisterStartup = asyncHandler(async (req, res) => {
  try {
    // Find the first available admin
    const firstAdmin = await admin.findOne();
    if (!firstAdmin) throw new ApiError(500, "No admin found for assignment");

    const { Startupname, password, email, phoneNumber, otp } = req.body;

    console.log(Startupname, password, email, phoneNumber, firstAdmin);

    // Check for empty fields
    if ([Startupname, password, email, phoneNumber].some((field) => !field?.trim())) {
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
    const existed = await startup.findOne({
      $or: [{ Startupname }, { email }, { phoneNumber }],
    });

    if (existed) {
      throw new ApiError(401, "Startup already registered");
    }

    // Verify OTP
    if (!otp || otp !== req.session.otp || phoneNumber !== req.session.phoneNumber) {
      throw new ApiError(400, "Invalid or expired OTP");
    }

    // Create new startup with admin reference
    const newStartup = await startup.create({
      Startupname,
      password,
      email,
      phoneNumber,
      admin: firstAdmin._id,
    });

    const createdStartup = await startup
      .findById(newStartup._id)
      .select("-password -refreshtoken");

    if (!createdStartup) {
      throw new ApiError(500, "Something went wrong during registration");
    }

    // Clear session OTP
    req.session.destroy();

    return res.status(200).json({ createdStartup });
  } catch (error) {
    console.error("Registration Error:", error);

    if (error.name === "MongoServerError" && error.message.includes("FieldPath")) {
      throw new ApiError(500, "Database error: Invalid field path");
    }

    throw new ApiError(500, error.message || "Internal server error");
  }
});

// Route to send OTP
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




    // login startup
    const Startuplogin=asyncHandler(async(req,res,next)=>{
    const{email,password,Startupname}= req.body;
    //TO CHECK WHETHER THE USER HAS FILLED THE CREDENTIALS//
if(

    [Startupname,email,password].some((ironman)=>{
 return ironman?.trim()==="" })
)
{

    throw new ApiError(403," fill the credentials")
}
// get the user from database an instance
const Startup= await startup.findOne({
    $or:[{Startupname},{email}],
});
if(!Startup){
    throw new ApiError(404,"NOT REGISTERED ,FIRST REGISTER");
}
// check the password
 const ispasswordvalid =await Startup.isPassword(password);
 if(!ispasswordvalid){

    throw new ApiError(403,"incorrect pasword,try again");
 }
const {accesstoken,refreshtoken}=  await generateaccesstokenandrefreshtoken(Startup._id);

return res.status(200).cookie("AccessToken",options).cookie("RefreshToken",options).json({ message:"User logged in sucsessfully",accesstoken,refreshtoken,Startup});
})
// Startup logout//
const StartupLogout = asyncHandler(async (req, res, next) => {
    try {
      // Ensure correct user reference
      const startupUser = await startup.findByIdAndUpdate(
        req.user?._id,
        { $set: { refreshtoken: undefined } },
        { new: true }
      );
  
      if (!startupUser) throw new ApiError(404, "Startup user not found");

      
  
      // Clear cookies and send response
      return res
        .status(200)
        .clearCookie("AccessToken", options)
        .clearCookie("RefreshToken", options)
        .json({ message: "Logged out successfully" });
    } catch (error) {
      console.error("Logout error:", error);
      throw new ApiError(500, "Failed to log out");
    }
  });

        const refreshaccesstoken= asyncHandler(async(req,res,next)=>{
            try {
                const incomingrefreshtoken= req.cookies?.RefreshToken|| req.body?.refreshtoken
                console.log(incomingrefreshtoken);
            
                if(!incomingrefreshtoken){
                    throw new ApiError(404,"unauthorized request");
                }
                const decoded= jwt.verify(incomingrefreshtoken,process.env.JWT_SECRET);
                const Startup= await startup.findById(decoded?._id);
                if(!Startup){
                    throw new ApiError(406,"invalid refreshtoken")
                }
                // check if it s not expired//
                if(incomingrefreshtoken!==Startup?.refreshtoken){
                    throw new ApiError(402,"refresh token expired");
                  
                    
                }
                 const {accesstoken,refreshtoken}=await generateaccesstokenandrefreshtoken(Startup._id);
                 return res.status(200).cookie("AccessToken",accesstoken,options).cookie("RefreshToken",refreshtoken,options).json({message:"tokens refreshed"})
                
            } catch (error) {
    console.log(error);
                throw new ApiError(404, " Tokens cant be regenerated");
            }
            })
            
            
            
          
            
            // Step 1: Request Password Reset
          const forgotpassword =asyncHandler( async (req, res) => {
                const { email,username } = req.body;
                const startup = await startup.findOne({
                    $or: [{ email }, { username }],
                  });
                if (!startup) {
                    throw new ApiError(404,"User does not exist")
                }
            
                const resetToken = crypto.randomBytes(32).toString('hex');
                startup.resetPasswordToken = resetToken;
                startup.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiry
                await startup.save();
            
                const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
            
                // Email setup
                const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: { startup: '', pass: '' }
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
                const startup = await startup.findOne({
                    resetPasswordToken: req.params.token,
                    resetPasswordExpires: { $gt: Date.now() }
                });
            
                if (!startup) {
                    throw new ApiError(401,"INVALID TOKEN")
                }
                res.json({ message: 'Token verified' });
            });
            
            // Step 3: Reset Password
          const resetpasswordtoken= asyncHandler( async (req, res) => {
                const { password } = req.body;
                const startup = await startup.findOne({
                    resetPasswordToken: req.params.token,
                    resetPasswordExpires: { $gt: Date.now() }
                });
            
                if (!startup) {
                    throw new ApiError(403," invalid or token expired");
                }
            
                const salt = await bcrypt.genSalt(10);
                startup.password = await bcrypt.hash(password, salt);
                startup.resetPasswordToken = undefined;
                startup.resetPasswordExpires = undefined;
                await startup.save();
            
                return res.status(200).json({ message: 'Password reset successful' });
            });
            
            const changestartuppasswordatlogin = asyncHandler(async (req, res, next) => {
               try {
                 const { password, newpassword, confirmedpassword } = req.body;
               
                 if (newpassword !== confirmedpassword) {
                   throw new ApiError(401, "Password confirmation doesn't match");
                 }
               
                 // 🎯 Corrected: Use `req.user` instead of `req.startup`
                 const startupUser = req.user;
               
                 if (!startupUser || req.userType !== "startup") {
                   throw new ApiError(403, "Access denied: Startup only");
                 }
                 
                 // ✅ Check old password
                 const isPasswordCorrect = await startupUser.isPassword(password);
               
                 if (!isPasswordCorrect) {
                    
                   throw new ApiError(404, "Wrong old password");
                 }
               
                 // 🔒 Set new password and save
                 startupUser.password = newpassword;
                 await startupUser.save({ validateBeforeSave: false });
               
                 return res.status(200).json({ message: "Password changed successfully for logged-in user" });
              
                }catch (error) {
                console.log(error);
            }
        });
               


    export {RegisterStartup,Startuplogin,StartupLogout,refreshaccesstoken,forgotpassword,resetpasswordtoken,verifytoken,changestartuppasswordatlogin,SendOTP};