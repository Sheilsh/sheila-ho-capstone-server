// parking.js

exports.seed = async function (knex) {
  // Use knex to insert data into your database here
  await knex("parking").del();
  await knex("parking").insert([
    {
      id: "2904a3a4-70e8-4481-9b11-3c3cd3d69764",
      spot_number: 1,
      is_booked: false,
    },
    {
      id: "ed93f0d8-0a38-4f91-91f1-35b9f2e69723",
      spot_number: 2,
      is_booked: true,
    },
    {
      id: "24aa1c3e-539c-4f3b-89e8-828212998b61",
      spot_number: 3,
      is_booked: false,
    },
    {
      id: "01e070ad-ae4f-4d4e-a9cf-f7dbfe81192d",
      spot_number: 4,
      is_booked: true,
    },
    {
      id: "a2f0e0d5-240a-495d-b211-0a7b63a09116",
      spot_number: 5,
      is_booked: false,
    },
  ]);
};
