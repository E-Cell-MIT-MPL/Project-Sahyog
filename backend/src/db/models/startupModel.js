import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const StartupSchema = new Schema(
  {
    Startupname: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    admin: { type: Schema.Types.ObjectId, ref: "admin", required: true },
    fixed: { type: Boolean, default: true },
    refreshtoken: {
      type: String,
    },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

StartupSchema.pre("save", async function (next) {
  // Only runs when password field changes
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

StartupSchema.methods.isPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

StartupSchema.methods.generateAccesstokens = function () {
  return jwt.sign(
    {
      _id: this.id,
      username: this.username,
      password: this.password,
      fullname: this.fullname,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRY,
    },
  );
};

StartupSchema.methods.generateRefreshTokens = function () {
  return jwt.sign(
    {
      _id: this.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRY,
    },
  );
};

export const startup = mongoose.model("startup", StartupSchema);
