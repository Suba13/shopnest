const db = require("../config/db");


function getAllProducts(callback) {
  db.query("SELECT * FROM products", callback);
}

function getProductById(id, callback) {
  db.query("SELECT * FROM products WHERE id = ?", [id], callback);
}

module.exports = {
  getAllProducts,
  getProductById,
};