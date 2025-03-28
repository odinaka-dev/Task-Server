const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./Routes/taskRoutes");
const morgan = require("morgan");
require("dotenv").config();

// Initialize the app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Default Route (Fixes the 404 error)
app.get("/", (req, res) => {
  res.send("Welcome to the Task API");
});

// Routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
