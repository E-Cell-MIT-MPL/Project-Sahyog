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
  // if we dont apply isModified the middleware  the password will keep on encrypted whenever there is any change in any component of database it will only changes when password changes
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
}); // methods to verify  encrypted password and db  password is same
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
