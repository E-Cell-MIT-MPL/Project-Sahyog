import { Router } from "express";
import { VerifyJWT } from "../middlewares/auth.middleware.js";
import { RegisterStartup,SendOTP,Startuplogin,StartupLogout } from "../controllers/Startup.controller.js";
import { refreshaccesstoken,forgotpassword, } from "../controllers/Startup.controller.js";
import { verifytoken } from "../controllers/Startup.controller.js";
import { resetpasswordtoken } from "../controllers/Startup.controller.js";
import { changestartuppasswordatlogin } from "../controllers/Startup.controller.js";
const startuprouter=Router();

startuprouter.route('/Register').post(RegisterStartup);//working
startuprouter.route('/login').post(Startuplogin);//working
startuprouter.route('/logout').post(VerifyJWT,StartupLogout);//working
startuprouter.route('/refresh').post(refreshaccesstoken);//working
startuprouter.route('/forgotpassword').post(forgotpassword);
startuprouter.route('/send-otp').post(SendOTP);//working
startuprouter.route('/reset-password/verifytoken').get(verifytoken);
startuprouter.route('/reset-password/token').post(resetpasswordtoken);
startuprouter.route('/login/resetpassword').post(VerifyJWT,changestartuppasswordatlogin);// working


export default startuprouter;