const userService = require("../service/user");

class UserController {
  async getAllRecords(req, res) {
    try {
      const data = await userService.getAllRecords();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //   async getRecordByID(req, res) {
  //     try {
  //       const data = await userService.getRecordByID();
  //       res.status(200).json(data);
  //     } catch (error) {
  //       res.status(500).json({ message: error.message });
  //     }
  //   }
}

module.exports = new UserController();
