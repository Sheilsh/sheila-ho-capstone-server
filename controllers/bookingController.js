const BookingService = require("../service/booking");

class BookingController {
  async getAllRecords(req, res) {
    try {
      const data = await BookingService.getAllRecords();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getRecordById(req, res) {
    try {
      const data = await BookingService.getRecordById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async addNewRecord(req, res) {
    try {
      const data = await BookingService.getRecordById(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new BookingController();
