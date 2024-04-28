const mongoose = require("mongoose");

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [2, "Charater length Must be atlist 2 charcter"],
    maxlength: [20, "Charcter length Must be less than 20 charcter"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  bio: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async (next) => {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(this.password, 10);
    // Replace plain password with hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Create User model
const User = mongoose.model("User", userSchema);

module.exports = User;
