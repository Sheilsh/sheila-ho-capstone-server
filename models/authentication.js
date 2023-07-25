const database = require("../db/db");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

class Authentication {
  //   async createUser({
  //     full_name,
  //     unit_number,
  //     address,
  //     city,
  //     phone_number,
  //     email,
  //     password,
  //   }) {
  //     const id = uuidv4(); // Generate UUID for id
  //     const hashedPassword = await bcrypt.hash(password, 10);

  //     return database("user").insert({
  //       id: id,
  //       full_name: full_name,
  //       unit_number: unit_number,
  //       address: address,
  //       city: city,
  //       phone_number: phone_number,
  //       email: email,
  //       password: hashedPassword,
  //     });
  //   }

  async createUser(full_name, unit, address, city, phone, email, password) {
    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await database
      .from("user")
      .where("email", email)
      .first();
    if (existingUser) {
      throw new Error("User already exists");
    }

    return database("user").insert({
      id,
      full_name,
      unit_number: unit,
      address,
      city,
      phone_number: phone,
      email,
      password: hashedPassword,
    });
  }

  async loginUser(email, password) {
    const user = await database.from("user").where("email", email).first();

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}

module.exports = new Authentication();
