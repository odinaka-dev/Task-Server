const Task = require("../Models/taskmodel");

// creating a new task POST/api/task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "The Task has not been created..." });
    }

    const task = new Task({ title, description, subtitle, Author });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message:
        "Error creating the task the server does not recognize this action...",
      error,
    });
  }
};

// fetching the task data to the frontend GET/api/task
const getTask = async (res, req) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching task from the server", error });
  }
};

// updating the task data from the frontend into the backend PUT/api/:id
const updateTask = async (req, res) => {
  try {
    const { title, description, subtitle, Author } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, subtitle, Author },
      { new: true }
    );

    if (!task)
      return res
        .status(404)
        .json({ message: "Task not found, update can't take place" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server failed to update task", error });
  }
};

// deleting task from DELETE/api/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task)
      return res
        .status(404)
        .json({ message: "Task to delete cannot be found" });

    res.status(200).json({ message: "Task has been deleted successflly" });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

module.exports = { createTask, getTask, updateTask, deleteTask };
