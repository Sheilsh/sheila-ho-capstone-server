const database = require("../db/db");

class Parking {
  getAllRecords() {
    return database
      .from("parking")
      .select("parking.id", "spot_number", "is_booked");
  }
}

module.exports = new Parking();
