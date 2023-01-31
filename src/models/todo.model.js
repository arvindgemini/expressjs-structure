const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  task: String,
  who: String,
  dueDate: String,
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
