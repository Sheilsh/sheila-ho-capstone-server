const db = require("../db/db");

class userDAO {
  getAllRecords() {
    return db
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
  //   async getRecordById(id) {
  //     const data = await db
  //       .join("license", "license.id", "user.license.id")
  //       .from("user")
  //       .select(
  //         "user.id",
  //         "full_name",
  //         "unit_number",
  //         "address",
  //         "city",
  //         "phone_number",
  //         "email"
  //       );
  //     return data;
  //   }
}

module.exports = new userDAO();
