import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 5001;
dotenv.config();

connectDB()
  .then(() => {
    app.on("err", (err) => {
      console.log("Error", err);
    });
    app.listen(PORT, () => {
      console.log(`server is started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });
