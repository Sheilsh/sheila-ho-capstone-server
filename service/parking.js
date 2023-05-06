const Parking = require("../models/parking");

class ParkingService {
  getAllRecords() {
    return Parking.getAllRecords();
  }
}

module.exports = new ParkingService();
