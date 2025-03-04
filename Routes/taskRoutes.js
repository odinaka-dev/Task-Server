const express = require("express");
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("tasks", createTask);
router.get("tasks", getTask);
router.put("task/:id", updateTask);
router.delete("task/:id", deleteTask);

module.exports = router;
