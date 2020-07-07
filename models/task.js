const mongoose = require("mongoose");

taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  Complete: Boolean,
});

module.exports = mongoose.model("Task", taskSchema);
