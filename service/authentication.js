const Authentication = require("../models/authentication");

class AuthenticationService {
  async createUser(
    full_name,
    unit_number,
    address,
    city,
    phone_number,
    email,
    password
  ) {
    return Authentication.createUser(
      full_name,
      unit_number,
      address,
      city,
      phone_number,
      email,
      password
    );
  }

  async loginUser(email, password) {
    return Authentication.loginUser(email, password);
  }
}

module.exports = new AuthenticationService();
