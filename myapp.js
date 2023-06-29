require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

mongoose
  .connect(
    `mongodb+srv://globetrotter:${process.env.MONGO_URL}@cluster0.b3ghyne.mongodb.net/ParsonsDB`
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Lets Do this !, Lets make a great web app" });
});

app.post("/", (req, res) => {
  res.json({ message: `This is the text you sent : ${req.body.id}` });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server connected at PORT : ${PORT}`);
  }
});
