import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import dbConnect from "./db/connect.js";
import adminroutes from "./routes/admin.route.js";
import startuproutes from "./routes/startup.route.js";
import session from "express-session";

dotenv.config({
  path: "./env",
});
const app = express();

await dbConnect();

// CORS
const corsOptions = {
  origin: process.env.FRONTEND_LOCAL_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  session({
    secret: "supersecretkey", // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  }),
);

// TODO production main isse comment kar denge, abhi sirf logging ke liye
app.use(morgan("dev"));

// Routes
app.use("/api/admin", adminroutes);
app.use("/api/startup", startuproutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server: Started on PORT ${PORT}`);
});
