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

  async getBooking(req, res) {
    try {
      const data = await UserService.getBooking(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    try {
      if (!req.body.full_name && !req.body.email) {
        res.status(400).json({ message: "all are required" });
      } else {
        await UserService.updateById(req.params.id, req.body);
        res.sendStatus(200);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
