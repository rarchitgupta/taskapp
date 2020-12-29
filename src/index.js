const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const bcrypt = require("bcryptjs");

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const myHashing = async () => {
  const password = "Red12345!";
  const hashedPass = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPass);

  const isMatch = await bcrypt.compare("Red12345", hashedPass);
  console.log(isMatch);
};

myHashing();
