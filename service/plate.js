const Plate = require("../models/plate");

class PlateService {
  addPlateByUserId(userId, plate) {
    return Plate.addPlateByUserId(userId, plate);
  }
}

module.exports = new PlateService();
