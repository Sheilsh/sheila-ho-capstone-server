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
        "end_datetime"
      );
  }
  //   getRecordById(id) {
  //     return database
  //       .first()
  //       .from("user")
  //       .where("user.id", id)
  //       .innerJoin("plate", "user.id", "=", "plate.user_id")
  //       .select(
  //         "user.id",
  //         "user.full_name",
  //         "user.unit_number",
  //         "user.address",
  //         "user.city",
  //         "user.phone_number",
  //         "user.email",
  //         "plate.plate_number"
  //       );
  //   }
}

module.exports = new Booking();
