const userDAO = require("../models/user");

class userService {
  getAllRecords() {
    return userDAO.getAllRecords();
  }

  //   getRecordById(id) {
  //     return userDAO.getRecordById(id);
  //   }
}

module.exports = new userService();
