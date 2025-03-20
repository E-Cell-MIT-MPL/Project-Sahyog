import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import dbConnect from "./db/connect.js";

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

// TODO production main isse comment kar denge, abhi sirf logging ke liye
app.use(morgan("dev")); 

// Routes
// TODO kuch aisa app.use('/api/auth', authroutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server: Started on PORT ${PORT}`);
});
