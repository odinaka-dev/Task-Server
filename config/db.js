const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database has been connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = connectDB;
