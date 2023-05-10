const database = require("../db/db");

class Booking {
  getAllRecords() {
    return database
      .from("booking")
      .join("parking", "parking.id", "booking.parking_id")
      .select(
        "booking.id",
        "parking_id",
        "plate_id",
        "start_datetime",
        "end_datetime",
        "spot_number",
        "is_booked"
      );
  }

  getRecordById(id) {
    return database
      .first()
      .from("booking")
      .where("booking.id", id)
      .join("parking", "parking.id", "=", "booking.parking_id")
      .select(
        "booking.id",
        "booking.parking_id",
        "booking.plate_id",
        "booking.start_datetime",
        "booking.end_datetime",
        "parking.spot_number",
        "parking.is_booked"
      );
  }

  addNewRecord(booking) {
    return database.insert(booking).into("booking");
  }
}

module.exports = new Booking();
