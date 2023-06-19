const database = require("../db/db");

class User {
  getAllRecords() {
    return database
      .from("user")
      .select(
        "user.id",
        "full_name",
        "unit_number",
        "address",
        "city",
        "phone_number",
        "email"
      );
  }

  getRecordById(id) {
    return database
      .first()
      .from("user")
      .where("user.id", id)
      .innerJoin("plate", "user.id", "=", "plate.user_id")
      .select(
        "user.id",
        "user.full_name",
        "user.unit_number",
        "user.address",
        "user.city",
        "user.phone_number",
        "user.email",
        "plate.id as plate_id",
        "plate.license_plate"
      );
  }

  getBooking(id) {
    return database
      .from("booking")
      .where("user_id", id)
      .innerJoin("parking", "booking.parking_id", "=", "parking.id")
      .select(
        "booking.id",
        "plate_number",
        "booking.parking_id",
        "start_datetime",
        "end_datetime",
        "parking.spot_number",
        "confirmation_number"
      );
  }

  updateById(id, data) {
    return database
      .from("user")
      .where("id", id)
      .update({ ...data, updated_at: new Date() });
  }
}

module.exports = new User();
