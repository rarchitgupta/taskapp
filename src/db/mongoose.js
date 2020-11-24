const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/taskmanager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password"))
        throw new Error("Password cannot contain 'password'");
      if (value.length <= 6)
        throw new Error("Password must be 6 characters long");
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Age must be a positive number");
    },
  },
});

const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const shopping = new Task({ title: "  Shopping" });

shopping
  .save()
  .then(() => {
    console.log(shopping);
  })
  .catch((error) => {
    console.log(error);
  });

// const me = new User({
//   name: "  Archit Gupta  ",
//   email: " RaRchitgupta@gmail.com ",
//   password: "onceupon89",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
