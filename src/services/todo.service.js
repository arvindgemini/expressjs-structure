const mongoose = require("mongoose");
const Todo = require("../models/todo.model");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await Todo.find({}).skip(offset).limit(config.listPerPage);
  const data = helper.emptyOrRows(rows);
  const meta = { page };
  return {
    data,
    meta,
  };
}

async function create(body) {
  const todo = await Todo.create({
    _id: new mongoose.Types.ObjectId(),
    task: body.task,
    who: body.who,
    dueDate: body.dueDate,
  });
  let message = "Error in creating task";
  if (todo) {
    message = "Task created successfully";
  }
  return { message };
}

async function update(id, data) {
  const todo = await Todo.findByIdAndUpdate(
    { _id: id },
    {
      task: data.task,
      who: data.who,
      dueDate: data.dueDate,
      done: data.done,
    }
  );
  let message = "Error in updating task";
  if (todo) {
    message = "Task updated successfully";
  }
  return { message };
}

async function remove(id) {
  const todo = await Todo.findByIdAndDelete({ _id: id });
  let message = "Error in deleting task";
  if (todo) {
    message = "Task deleting successfully";
  }
  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
