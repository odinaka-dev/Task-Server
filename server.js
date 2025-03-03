const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./Routes/taskRoutes");
const connectDB = require("./config/db");
const { config } = require("dotenv");
require("dotenv/config");

const app = express();
connectDB();

//middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT;

app.listen(3000, () => {
  console.log("the server is running at https://localhost:3000");
});
