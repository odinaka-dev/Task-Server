const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const taskRoutes = require("./Routes/taskRoutes");
// const { config } = require("dotenv");
require("dotenv/config");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routes
app.use(`api/`, taskRoutes);
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
