const db = require("../connection");
var UserModel = {};

UserModel.getAllUser = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

UserModel.createUser=(name,email)=>{
const db = require("../connection");
return new Promise((resolve, reject) => {
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    }
  );
});         
}

module.exports = UserModel;
