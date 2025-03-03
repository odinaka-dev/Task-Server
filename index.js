const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const taskRoutes = require("./Routes/taskRoutes");
const { config } = require("dotenv");
const { message } = require("statuses");
require("dotenv/config");
// const connectDB = require("./config/db");

const app = express();
const api = process.env.API_URL;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routes
app.use("/api", taskRoutes);
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("database has been connected successfully");
  })
  .catch((error) => {
    console.error(error);
  });
const PORT = process.env.PORT;

app.listen(3000, () => {
  console.log(`the server is running at https://localhost:${PORT}`);
});
