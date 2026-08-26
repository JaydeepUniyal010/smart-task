// src/controllers/task.controller.js

import Task from "../models/task.model.js";

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Task title is required",
      });
    }

    const task = await Task.create({
      title: title.trim(),
      description,
      status,
      priority,
      dueDate,
      createdBy: req.user?._id,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create task",
      error: error.message,
    });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const filter = req.user?._id
      ? { createdBy: req.user._id }
      : {};

    const tasks = await Task.find(filter)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch tasks",
      error: error.message,
    });
  }
};

// Get a single task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid task ID",
      error: error.message,
    });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      {
        title,
        description,
        status,
        priority,
        dueDate,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to update task",
      error: error.message,
    });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to delete task",
      error: error.message,
    });
  }
};

export {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};