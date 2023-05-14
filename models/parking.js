const database = require("../db/db");

class Parking {
  getAllRecords() {
    return database
      .from("parking")
      .select("parking.id", "spot_number", "is_booked");
  }

  // getAvailableSpotCount() {
  //   return database.from("parking").count("id").where({ is_booked: false });
  // }

  // async updateParkingEndTime(parkingId, endDatetime) {
  //   await database
  //     .from("parking")
  //     .where("id", parkingId)
  //     .update("current_booking_end_datetime", endDatetime);
  // }
}

module.exports = new Parking();
