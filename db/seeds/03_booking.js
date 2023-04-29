// booking.js
exports.seed = async function (knex) {
  await knex("booking").del();
  await knex("booking").insert([
    {
      id: "9a6d1b6c-fafc-4f4a-8c6d-b9136cbf4a52",
      user_id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      parking_id: "2904a3a4-70e8-4481-9b11-3c3cd3d69764",
      start_datetime: "2022-01-01 08:00:00",
      end_datetime: "2022-01-01 18:00:00",
    },
    {
      id: "50cc96e9-cd8a-46b9-955e-5a57d5c8e65f",
      user_id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      parking_id: "24aa1c3e-539c-4f3b-89e8-828212998b61",
      start_datetime: "2022-01-02 08:00:00",
      end_datetime: "2022-01-02 18:00:00",
    },
    {
      id: "015bc2fb-12ed-4b95-8c05-31a94038b1a6",
      user_id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      parking_id: "a2f0e0d5-240a-495d-b211-0a7b63a09116",
      start_datetime: "2022-01-03 08:00:00",
      end_datetime: "2022-01-03 18:00:00",
    },
  ]);
};
