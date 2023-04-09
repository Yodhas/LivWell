const router = require("express").Router();
const { model } = require("mongoose");
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend domain
    res.set("Access-Control-Allow-Credentials", "true");
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: hashedPass,
    });

    const userEmailValidate = await User.findOne({ email: req.body.email });
    console.log(userEmailValidate);
    userEmailValidate && res.status(400).json("Username Already Exists");

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log("Username Already Exists!!");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  // const username = req.query.user;
  // console.log(username)
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend domain
    res.set("Access-Control-Allow-Credentials", "true");
    let posts;
    if (username) {
      posts = await AddProperty.find({ email: username });
    } else {
      posts = await User.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend domain
    res.set("Access-Control-Allow-Credentials", "true");
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong credentials username!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials pass!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log("Invalid Email or Password");
  }
});

module.exports = router;
