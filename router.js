const express = require("express");
const router = express.Router();
const User = require("./schema/user.js");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/t", (req, res) => {
  res.render("aa", { title: "titsssssssssssssle" });
});
router.post("/post", (req, res) => {
  console.log("post: ", req.body);
  res.send("POST");
});
router.get("/:name", (req, res) => {
  const newUser = new User({
    name: req.params.name,
    data: { job: "white lion" },
  });
  User.find({ name: newUser }, (err, user) => {
    console.log("user: ", user);
    res.render("input", { user: user });
  });
});
module.exports = router;
