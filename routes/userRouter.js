const express = require("express");
const router = express.Router();
const db = require("../connection");
const UserController = require("../controllers/userController");

// Get all users & Create a new user
router
  .route("/users")
  .get(UserController.getAllUser)
  .post(UserController.createUser);

// Get a user by ID & Update a user & Delete a user
router
  .route("/users/:id")
  .get(UserController.getUserByID)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
