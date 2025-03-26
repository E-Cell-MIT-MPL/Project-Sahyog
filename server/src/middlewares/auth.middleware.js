import jwt from "jsonwebtoken";
import asyncHandler from "../utilities/asynchandler.js";
import { admin } from "../db/models/adminmodel.js";
import { startup } from "../db/models/startupModel.js";
export const VerifyJWT = asyncHandler(async (req, res, next) => {
    try {
      // Extract token from cookies or headers
      const token = req.cookies?.accesstoken || req.headers?.authorization?.replace("Bearer ", "");
  
      if (!token) throw new ApiError(401, "Unauthorized: Missing token");
  
      // Verify JWT
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
      // Determine user type dynamically
      const userTypes = { admin, startup };
      let user = null;
  
      for (const [type, model] of Object.entries(userTypes)) {
        user = await model.findById(decodedToken?._id).select(" -refreshtoken");
        if (user) {
          req.user = user;
          req.userType = type;
          break;
        }
      }
  
      if (!user) throw new ApiError(403, "Unauthorized: User not found");
  
      next();
    } catch (error) {
      console.error("JWT verification error:", error);
      const statusCode = error.name === "JsonWebTokenError" ? 403 : 401;
      throw new ApiError(statusCode, "Unauthorized access");
    }
  });