const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const AddNewPropertyRoute = require("./routes/AddNewProperty")
const multer = require("multer");



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