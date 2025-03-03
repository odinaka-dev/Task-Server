const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    Author: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
