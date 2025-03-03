const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    Author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
