const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Access secret from .env
const JWT_SECRET = process.env.JWT_SECRET;

function login(req, res) {
  const { email, password } = req.body;

  User.getUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = results[0];
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, name: user.name },
    });
  });
}

function logout(req, res) {
  res.json({ message: "User logged out successfully" });
}

module.exports = {
  login,
  logout,
};
