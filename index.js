const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require("./Routes/taskRoutes");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Routes
app.use("/api", taskRoutes);
console.log("Routes loaded: /api/tasks");

// Connect to MongoDB
connectDB();

// Port configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
