const Product = require("../models/productModel");

function fetchProducts(req, res) {
  Product.getAllProducts((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json(results);
  });
}

function fetchProductById(req, res) {
  const { id } = req.params;
  Product.getProductById(id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    if (results.length === 0) return res.status(404).json({ message: "Product not found" });
    res.json(results[0]);
  });
}

module.exports = {
  fetchProducts,
  fetchProductById,
};
