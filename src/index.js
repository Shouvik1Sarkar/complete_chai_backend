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
