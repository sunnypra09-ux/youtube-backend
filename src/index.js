import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
const PORT = process.env.PORT || 5001;
dotenv.config();

connectDB();
