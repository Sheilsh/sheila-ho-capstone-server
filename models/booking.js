const database = require("../db/db");
const { v4: uuidv4 } = require("uuid");

class Booking {
  generateShortConfirmationNumber() {
    const length = 8;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let confirmationNumber = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      confirmationNumber += chars.charAt(randomIndex);
    }

    return confirmationNumber;
  }

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
        "parking.is_booked",
        "booking.confirmation_number"
      );
  }

  async addNewRecord(booking) {
    let { plate_id } = booking;

    if (!plate_id) {
      plate_id = uuidv4();
    }

    const id = uuidv4();
    const confirmation_number = this.generateShortConfirmationNumber();
    const newBooking = { ...booking, id, plate_id, confirmation_number };

    await database.insert(newBooking).into("booking");

    return this.getRecordById(id);
  }

  deleteRecordById(id) {
    return database.from("booking").where("id", id).del();
  }
}

module.exports = new Booking();
