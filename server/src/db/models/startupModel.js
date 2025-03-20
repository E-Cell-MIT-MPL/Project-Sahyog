import mongoose, { Schema } from "mongoose";

const StartupSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const Startup =
  mongoose.models.startup || mongoose.model("startup", StartupSchema);

export default Startup;
