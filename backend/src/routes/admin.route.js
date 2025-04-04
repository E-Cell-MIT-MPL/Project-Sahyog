import { Router } from "express";
import { VerifyJWT } from "../middlewares/auth.middleware.js";

import {
  Adminlogin,
  Adminlogout,
  changeAdminPasswordAtLogin,
  forgotpassword,
  refreshaccesstoken,
  RegisterAdmin,
  resetpasswordtoken,
  verifytoken,
} from "../controllers/Admin.controller.js";
import { SendOTP } from "../controllers/Startup.controller.js";
const router = Router();
router.route("/Register").post(RegisterAdmin); //working
router.route("/login").post(Adminlogin); //working
router.route("/logout").post(VerifyJWT, Adminlogout); //working
router.route("/refresh").post(refreshaccesstoken); //working
router.route("/send-otp").post(SendOTP); //working
router.route("/forgotpassword").post(forgotpassword); //required email
router.route("/reset-password/verifytoken").get(verifytoken); //required email
router.route("/reset-password/token").post(resetpasswordtoken); // required email
router
  .route("/login/resetpassword")
  .post(VerifyJWT, changeAdminPasswordAtLogin); //working

export default router;
