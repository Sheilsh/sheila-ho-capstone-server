const database = require("../db/db");

class Plate {
  async addPlateByUserId(userId, plate) {
    const existingPlates = await database("plate")
      .select("license_plate")
      .where("user_id", userId)
      .first();

    let licensePlate =
      existingPlates && existingPlates.license_plate
        ? existingPlates.license_plate
        : [];

    licensePlate.push({ plate_number: plate.plate_number });

    return database("plate")
      .where("user_id", userId)
      .update({ license_plate: JSON.stringify(licensePlate) });
  }
}

module.exports = new Plate();
