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
        "plate.plate_number"
      );
  }
}

module.exports = new User();
