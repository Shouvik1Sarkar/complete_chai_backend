import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import connectDB from "./db/index.js";

import { app } from "./app.js";

connectDB()
  .then(
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("Mongodb connection failed", err);
  });

/*import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

const app = express();

// 1st way
// function connectdb() {}
// connectdb();

// 2nd way

(async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Listening port: , ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();*/
