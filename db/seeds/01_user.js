const bcrypt = require("bcrypt");

exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      full_name: "John Doe",
      unit_number: "200",
      address: "123 Queen St",
      city: "Toronto",
      phone_number: "+1 (646) 123-1234",
      email: "johndoe@gmail.com",
      password: await bcrypt.hash("1234", 10),
    },
    {
      id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      full_name: "Elizabeth Doe",
      unit_number: "202",
      address: "123 Queen St",
      city: "Toronto",
      phone_number: "+1 (645) 123-1234",
      email: "elizabethdoe@gmail.com",
      password: await bcrypt.hash("1234", 10),
    },
    {
      id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      full_name: "Jane Smith",
      unit_number: "203",
      address: "123 Queen St",
      city: "Toronto",
      phone_number: "+1 (643) 123-1234",
      email: "janesmith@gmail.com",
      password: await bcrypt.hash("1234", 10),
    },
  ]);
};
