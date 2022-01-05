const Task = require("../models/tasks");
const asyncWrapper = require("../middlewares/async");
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  res.json({ tasks });

  res.json({ error: e.message });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const tasks = await Task.findOne({ _id: taskID });

  if (!tasks) {
    return res.json({ msg: `No task with id ${taskID}` });
  }
  res.json({ tasks });

  res.json({ error: e.message });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tasks) {
    return res.json({ msg: `No task with id ${taskID}` });
  }

  res.json({ tasks });

  res.json({ error: e.message });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const tasks = await Task.findOneAndDelete({ _id: taskID });

  if (!tasks) {
    return res.json({ msg: `No task with id ${taskID}` });
  }

  res.json({ tasks: null, msg: `success` });

  res.json({ error: e.message });
});
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
