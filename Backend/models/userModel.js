const db = require("../config/db");

function getUserByEmail(email, callback) {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
}

module.exports = {
  getUserByEmail,
};
