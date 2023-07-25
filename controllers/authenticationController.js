require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;
const AuthenticationService = require("../service/authentication");

class AuthenticationController {
  async signup(req, res) {
    try {
      const {
        full_name,
        unit_number,
        address,
        city,
        phone_number,
        email,
        password,
      } = req.body;
      await AuthenticationService.createUser(
        full_name,
        unit_number,
        address,
        city,
        phone_number,
        email,
        password
      );
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await AuthenticationService.loginUser(email, password);

      if (user) {
        const { id } = user;
        const token = jwt.sign({ userId: id }, secretKey, { expiresIn: "1h" });
        console.log("JWT Token:", token); // Add this console log statement
        res.json({ userId: id, token });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AuthenticationController();
