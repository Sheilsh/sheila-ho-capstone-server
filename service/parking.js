const Parking = require("../models/parking");

class ParkingService {
  getAllRecords() {
    return Parking.getAllRecords();
  }

  // getAvailableSpotCount() {
  //   return Parking.getAvailableSpotCount();
  // }

  // updateParkingEndTime() {
  //   return Parking.updateParkingEndTime();
  // }
}

module.exports = new ParkingService();
