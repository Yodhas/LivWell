const router = require("express").Router();
const User = require("../models/Users");
const AddProperty = require("../models/AddProperty");

//CREATE POST
router.post("/", async (req, res) => {
  const newAddProperty = new AddProperty(req.body);
  try {
    const savedAddProperty = await newAddProperty.save();
    res.status(200).json(savedAddProperty);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
      const addProperty = await AddProperty.findById(req.params.id);
      if (addProperty.email === req.body.email) {
        try {
          const updatedAddProperty = await AddProperty.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedAddProperty);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //DELETE POST
router.delete("/:id", async (req, res) => {
    try {
      const addProperty = await AddProperty.findById(req.params.id);
      if (addProperty.email === req.body.email) {
        try {
          await addProperty.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET POST
router.get("/:id", async (req, res) => {
    try {
      const addProperty = await AddProperty.findById(req.params.id);
      res.status(200).json(addProperty);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//   _________To be Viewed_________

  //GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    console.log(username)
    try {
      let posts;
      if (username) {
        posts = await AddProperty.find( {email:username} );
      } else {
        posts = await AddProperty.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;