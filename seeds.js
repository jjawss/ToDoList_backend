const mongoose = require("mongoose");
const Task = require("./models/task");

let seeds = [
  {
    name: "Run",
    description: "Run two miles",
    complete: false,
  },
  {
    name: "Code",
    description: "build a todo app with nodejs and react",
    complete: false,
  },
  {
    name: "Dinner",
    description: "Eat dinner",
    complete: true,
  },
];

async function seedDB() {
  try {
    await Task.deleteMany({});
    console.log("Campgrounds removed");
    for (const seed of seeds) {
      let task = await Task.create(seed);
      console.log("Task created");
      task.save();
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDB;
