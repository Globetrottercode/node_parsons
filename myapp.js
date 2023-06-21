require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Lets Do this !, Lets make a great web app" });
});

app.post("/", (req, res) => {
  console.log("request recieved", req.body.id);
  res.json({ message: `This is the text you sent : ${req.body.id}` });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server connected at PORT : ${PORT}`);
  }
});
