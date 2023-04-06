const express = require('express')
const app = express()
const port = 5000
const userModel = require('./models/Users')
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const AddNewPropertyRoute = require("./routes/AddNewProperty")
const multer = require("multer");
const cors = require('cors');

app.use(function(req, res, next) {
  // Allow requests from http://localhost:3000
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Allow cookies to be included in the request
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // Allow the following HTTP methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // Allow the following request headers
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Pass control to the next middleware function
  next();
});

app.use(express.json());

main().then(()=>{console.log("Successfully Connected!")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/LivWell');
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.png");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/new', AddNewPropertyRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})