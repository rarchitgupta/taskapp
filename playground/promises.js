require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

// 5fbf3f55601c5516067a524e

// User.findByIdAndUpdate("5fbf3f55601c5516067a524e", { age: 20 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 20 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Task.findByIdAndDelete("5fbf4188f27a3e174d4eea66", { age: 20 })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5fbf3f55601c5516067a524e", 25)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTask("5fbf40aa7bca0b16f3de0283")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
