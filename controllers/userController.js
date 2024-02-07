const db = require("../connection");
const UserModel = require("../Models/userModel");

const getAllUser = async (req, res) => {
  try {
    const results = await UserModel.getAllUser();
    if (!results.length > 0) throw new Error("No user found!");
    return res.status(200).json(results);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await UserModel.createUser(name, email);
    return res.status(201).json({
      success: true,
      message: "User added successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ error: err });
  }
};

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.getUserByID(id);
    if (!result) throw new Error(`User with the id ${id} not found!`);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await UserModel.updateUser(name, email, id);
    return res.status(200).json({ message: "User updated successfully." });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.deleteUser(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllUser,
  createUser,
  getUserByID,
  updateUser,
  deleteUser,
};
