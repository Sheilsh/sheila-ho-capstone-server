// user.js
exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      full_name: "Jane Doe",
      unit_number: "200",
      address: "123 Queen St",
      city: "Toronto",
      phone_number: "+1 (646) 123-1234",
      email: "janedoe@gmail.com",
    },
    {
      id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      full_name: "John Doe",
      unit_number: "202",
      address: "123 Queen St",
      city: "Toronto",
      phone_number: "+1 (645) 123-1234",
      email: "johndoe@gmail.com",
    },
    {
      id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      full_name: "Joe Doe",
      unit_number: "203",
      address: "123 Queen St",
      city: "Toronto",
      phone_number: "+1 (643) 123-1234",
      email: "joedoe@gmail.com",
    },
  ]);

  await knex("license_plate").del();
  await knex("license_plate").insert([
    {
      id: 1,
      user_id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      plate_number: "ABC123",
      plate_state: "ON",
    },
    {
      id: 2,
      user_id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      plate_number: "DEF456",
      plate_state: "ON",
    },
    {
      id: 3,
      user_id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      plate_number: "ABC456",
      plate_state: "ON",
    },
    {
      id: 4,
      user_id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      plate_number: "DEF789",
      plate_state: "ON",
    },
    {
      id: 5,
      user_id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      plate_number: "ABC852",
      plate_state: "ON",
    },
    {
      id: 6,
      user_id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      plate_number: "DEF963",
      plate_state: "ON",
    },
  ]);
};
