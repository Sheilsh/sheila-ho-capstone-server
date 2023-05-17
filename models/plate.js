const database = require("../db/db");
const { v4: uuidv4 } = require("uuid");

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

    const newPlate = { id: uuidv4(), plate_number: plate.plate_number };
    licensePlate.push(newPlate);

    return database("plate")
      .where("user_id", userId)
      .update({ license_plate: JSON.stringify(licensePlate) });
  }
}

module.exports = new Plate();
