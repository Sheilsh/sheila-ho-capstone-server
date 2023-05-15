const database = require("../db/db");
const { v4: uuidv4 } = require("uuid");

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
        "booking.plate_number",
        "booking.start_datetime",
        "booking.end_datetime",
        "parking.spot_number",
        "parking.is_booked"
      );
  }

  async addNewRecord(booking) {
    let { plate_id } = booking;

    if (!plate_id) {
      plate_id = uuidv4();
    }

    const id = uuidv4();
    const newBooking = { ...booking, id, plate_id };

    return database.insert(newBooking).into("booking");
  }

  deleteRecordById(id) {
    return database.from("booking").where("id", id).del();
  }
}

module.exports = new Booking();
