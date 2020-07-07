const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/tasks", (req, res) => {
  Task.find({}, (err, allTasks) => {
    if (err) {
      console.log(err);
    } else {
      res.json(allTasks);
    }
  });
});

module.exports = router;
