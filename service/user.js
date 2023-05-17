const User = require("../models/user");

class UserService {
  getAllRecords() {
    return User.getAllRecords();
  }

  getRecordById(id) {
    return User.getRecordById(id);
  }

  getBooking(id) {
    return User.getBooking(id);
  }

  updateById(id, data) {
    return User.updateById(id, data);
  }
}

module.exports = new UserService();
