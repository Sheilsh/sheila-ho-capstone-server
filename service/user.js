const User = require("../models/user");

class UserService {
  getAllRecords() {
    return User.getAllRecords();
  }

  getRecordById(id) {
    return User.getRecordById(id);
  }
}

module.exports = new UserService();
