require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

// 5fbf3f55601c5516067a524e

User.findByIdAndUpdate("5fbf3f55601c5516067a524e", { age: 20 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 20 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

Task.findByIdAndDelete("5fbf4188f27a3e174d4eea66", { age: 20 })
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: true });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
