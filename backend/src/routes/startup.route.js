import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  RegisterStartup,
  SendOTP,
  Startuplogin,
  StartupLogout,
} from "../controllers/Startup.controller.js";

import {
  refreshaccesstoken,
  forgotpassword,
  verifytoken,
  resetpasswordtoken,
  changestartuppasswordatlogin,
} from "../controllers/Startup.controller.js";

const startuprouter = Router();

startuprouter.route("/register").post(RegisterStartup); //working
startuprouter.route("/login").post(Startuplogin); //working
startuprouter.route("/logout").post(verifyJWT, StartupLogout); //working
startuprouter.route("/refresh").post(refreshaccesstoken); //working
startuprouter.route("/forgotpassword").post(forgotpassword);
startuprouter.route("/send-otp").post(SendOTP); //working
startuprouter.route("/reset-password/verifytoken").get(verifytoken);
startuprouter.route("/reset-password/token").post(resetpasswordtoken);
startuprouter
  .route("/login/resetpassword")
  .post(verifyJWT, changestartuppasswordatlogin); // working

export default startuprouter;
