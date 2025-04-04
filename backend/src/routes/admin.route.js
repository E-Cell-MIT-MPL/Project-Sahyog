import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { SendOTP } from "../controllers/Startup.controller.js";

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

const router = Router();

router.route("/register").post(RegisterAdmin); //working
router.route("/login").post(Adminlogin); //working
router.route("/logout").post(verifyJWT, Adminlogout); //working
router.route("/refresh").post(refreshaccesstoken); //working
router.route("/send-otp").post(SendOTP); //working
router.route("/forgotpassword").post(forgotpassword); //required email
router.route("/reset-password/verifytoken").get(verifytoken); //required email
router.route("/reset-password/token").post(resetpasswordtoken); // required email
router
  .route("/login/resetpassword")
  .post(verifyJWT, changeAdminPasswordAtLogin); //working

export default router;
