const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ test: true, name: "David", Attempt: 1 });
});

module.exports = router;
