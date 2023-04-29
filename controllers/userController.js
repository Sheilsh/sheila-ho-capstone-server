const UserService = require("../service/user");

class UserController {
  async getAllRecords(req, res) {
    try {
      const data = await UserService.getAllRecords();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getRecordById(req, res) {
    try {
      const data = await UserService.getRecordById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
