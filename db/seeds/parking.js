// parking.js

exports.seed = function (knex) {
  // Use knex to insert data into your database here
  return knex("parking").insert([
    {
      id: "1",
      is_available: true,
    },
    {
      id: "2",
      is_available: false,
    },
    {
      id: "3",
      is_available: false,
    },
    {
      id: "4",
      is_available: true,
    },
    {
      id: "5",
      is_available: true,
    },
  ]);
};
