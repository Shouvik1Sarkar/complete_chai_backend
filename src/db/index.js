import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
let connecionInstance;
const connectDB = async () => {
  try {
    connecionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("DATABASE connected properly", connecionInstance);
  } catch (error) {
    console.log(process.env.MONGODB_URI);
    console.log("-----", connecionInstance);

    console.log("MongoDB connection error", error);
  }
};

export default connectDB;
