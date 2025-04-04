import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const AdminSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    startupAssociated: {
      type: Schema.Types.ObjectId,
      ref: "startup",
    },
    phoneNumber: { type: String, unique: true, required: true },

    refreshtoken: {
      type: String,
    },
  },
  { timestamps: true },
);

AdminSchema.pre("save", async function (next) {
  // Only runs when password field changes
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

AdminSchema.methods.isPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

AdminSchema.methods.generateAccesstokens = function () {
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

AdminSchema.methods.generateRefreshTokens = function () {
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

export const admin = mongoose.model("admin", AdminSchema);
