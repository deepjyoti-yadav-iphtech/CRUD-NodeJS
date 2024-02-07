const db = require("../connection");
const { getUserByID } = require("../controllers/userController");
const {
  getAllUserQuery,
  createUserQuery,
  getUserByIDQuery,
  updateUserQuery,
  deleteUserQuery,
} = require("../sql/userQueries");
var UserModel = {};

UserModel.getAllUser = () => {
  return new Promise((resolve, reject) => {
    db.query(getAllUserQuery, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

UserModel.createUser = (name, email) => {
  return new Promise((resolve, reject) => {
    db.query(createUserQuery, [name, email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

UserModel.getUserByID = (id) => {
  return new Promise((resolve, reject) => {
    db.query(getUserByIDQuery, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

UserModel.updateUser = (name, email, id) => {
  return new Promise((resolve, reject) => {
    db.query(updateUserQuery, [name, email, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

UserModel.deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(deleteUserQuery, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
module.exports = UserModel;
