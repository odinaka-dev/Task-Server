const Task = require("../Models/taskmodel");

// Creating a new task POST/api/tasks
const createTask = async (req, res) => {
  try {
    const { title, description, subtitle, author } = req.body;

    if (!title || !description || !author) {
      return res
        .status(400)
        .json({ message: "Title, description, and author are required." });
    }

    const task = new Task({ title, description, subtitle, author });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Error creating the task.",
      error: error.message,
    });
  }
};

// Fetching all tasks GET/api/tasks
const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks.", error: error.message });
  }
};

// Updating a task by ID PUT/api/tasks/:id
const updateTask = async (req, res) => {
  try {
    const { title, description, subtitle, author } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, description, author },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task.", error: error.message });
  }
};

// Deleting a task DELETE/api/tasks/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({ message: "Task deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task.", error: error.message });
  }
};

module.exports = { createTask, getTask, updateTask, deleteTask };
