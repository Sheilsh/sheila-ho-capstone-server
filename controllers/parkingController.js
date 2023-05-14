const ParkingService = require("../service/parking");

class ParkingController {
  async getAllRecords(req, res) {
    try {
      const data = await ParkingService.getAllRecords();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // async getAvailableSpotCount(req, res) {
  //   try {
  //     const data = await ParkingService.getAvailableSpotCount();
  //     res.status(200).json(data);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // }

  // async updateParkingEndTime(req, res) {
  //   try {
  //     const data = await ParkingService.updateParkingEndTime();
  //     res.status(200).json(data);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // }
}

module.exports = new ParkingController();
