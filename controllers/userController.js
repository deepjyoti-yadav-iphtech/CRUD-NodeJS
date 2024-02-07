const db = require("../connection");
const UserModel = require("../Models/userModel");

const getAllUser = async (req, res) => {
  try {
    const results = await UserModel.getAllUser();
    if (!results.length > 0) throw new Error("No user found!");
    return res.status(200).json({ success: true, data: results });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};


const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await  UserModel.createUser(name, email);
    return res.status(201).json({ success: true, message: "User added successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ error: err });
  }
}

// Get a single user by ID
const getUserByID = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, id],
    (err) => {
      if (err) throw err;
      res.json({ message: "User updated successfully" });
    }
  );
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "User deleted successfully" });
  });
};

module.exports = {
  getAllUser,
  createUser,
  getUserByID,
  updateUser,
  deleteUser,
};
