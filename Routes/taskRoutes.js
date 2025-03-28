const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Initialize router
const router = express.Router();

// Define routes
router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

// Export the router
module.exports = router;
