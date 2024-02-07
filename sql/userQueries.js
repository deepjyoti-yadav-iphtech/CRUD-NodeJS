const getAllUserQuery = "SELECT * FROM users";
const createUserQuery = "INSERT INTO users (name, email) VALUES (?, ?)";
const getUserByIDQuery = "select * from users where id=?";
const updateUserQuery = "UPDATE users SET name = ?, email = ? WHERE id = ?";
const deleteUserQuery = "DELETE FROM users WHERE id = ?";

module.exports = {
  getAllUserQuery,
  createUserQuery,
  getUserByIDQuery,
  updateUserQuery,
  deleteUserQuery,
};
