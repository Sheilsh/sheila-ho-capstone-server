const PlateService = require("../service/plate");

class PlateController {
  async addPlateByUserId(req, res) {
    try {
      const userId = req.params.userId;
      const newPlate = await PlateService.addPlateByUserId(userId, req.body);
      res.status(201).json(newPlate);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PlateController();
