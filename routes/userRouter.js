const express = require("express");
const router = express.Router();
const db = require("../connection");
const {
  getAllUser,
  createUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Get all users
router.get("/users", getAllUser);

// Create a new user
router.post("/users", createUser);

// Get a user by ID
router.get("/users/:id", getUserByID);

// Update a user
router.put("/users/:id", updateUser);

// Delete a user
router.delete("/users/:id", deleteUser);

module.exports = router;
