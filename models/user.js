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
        "email",
        "license_plate"
      );
  }
  getRecordById(id) {
    return database
      .first()
      .from("user")
      .where("user.id", id)
      .select(
        "user.id",
        "user.full_name",
        "user.unit_number",
        "user.address",
        "user.city",
        "user.phone_number",
        "user.email",
        "user.license_plate"
      );
  }
}

module.exports = new User();
