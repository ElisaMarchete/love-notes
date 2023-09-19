const router = require("express").Router();
const e = require("express");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Love Notes" });
});

module.exports = router;
