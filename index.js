require("dotenv").config();
const express = require("express");
const db = require("./connection");
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");

const userRouter = require("./routes/userRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});

//Routes

app.use("/", userRouter);
