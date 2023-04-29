// booking.js

exports.seed = function (knex) {
  // Use knex to insert data into your database here
  return knex("booking").insert([
    {
      id: "1",
      user_id: null,
      parking_id: "1",
      start_datetime: "2023-04-28 20:21:27.799",
      end_datetime: "2023-04-28 20:31:27.799",
    },
    {
      id: "2",
      user_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      parking_id: "2",
      start_datetime: "2023-04-28 20:21:27.800",
      end_datetime: "2023-04-28 20:31:27.800",
    },
    {
      id: "3",
      user_id: "2922c286-16cd-4d43-ab98-c79f698aeaf8",
      parking_id: "3",
      start_datetime: "2023-04-28 20:21:27.800",
      end_datetime: "2023-04-28 20:31:27.800",
    },
  ]);
};
