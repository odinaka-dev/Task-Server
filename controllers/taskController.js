const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const { title, description, subtitle, author, image } = req.body;
    if (!title || !description || !author) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const task = new Task({ title, description, subtitle, author, image });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    // Append full URL to the image path
    const updatedTasks = tasks.map((task) => ({
      ...task._doc,
      image: task.image
        ? `${req.protocol}://${req.get("host")}${task.image}`
        : null,
    }));

    res.status(200).json(updatedTasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @route   PUT /api/tasks/:id
const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @route   DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
