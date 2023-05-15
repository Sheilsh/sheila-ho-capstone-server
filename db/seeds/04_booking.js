// booking.js
exports.seed = async function (knex) {
  await knex("booking").del();
  await knex("booking").insert([
    {
      id: "xGz8p3dE",
      user_id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      plate_id: "a0b21d7c-384a-4e7c-9ec9-14c1b47a30d3",
      plate_number: "DEF963",
      parking_id: "a2f0e0d5-240a-495d-b211-0a7b63a09116",
      start_datetime: "2023-05-09 08:00:00",
      end_datetime: "2023-05-09 18:00:00",
    },
    {
      id: "wSf4u9cH",
      user_id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      plate_id: "bf30d7b5-678b-4f98-bd1e-9c9a1fe16252",
      plate_number: "ABC852",
      parking_id: "2904a3a4-70e8-4481-9b11-3c3cd3d69764",
      start_datetime: "2023-05-07 08:00:00",
      end_datetime: "2023-05-07 18:00:00",
    },
    {
      id: "vKp7e2qR",
      user_id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      plate_id: "e045bb6d-c2d1-4d8f-9b99-12c84d1f3097",
      plate_number: "BBC456",
      parking_id: "24aa1c3e-539c-4f3b-89e8-828212998b61",
      start_datetime: "2023-05-10 08:00:00",
      end_datetime: "2023-05-10 18:00:00",
    },
    {
      id: "tNf5j6zT",
      user_id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      plate_id: "a0b21d7c-384a-4e7c-9ec9-14c1b47a30d3",
      plate_number: "DEF963",
      parking_id: "2904a3a4-70e8-4481-9b11-3c3cd3d69764",
      start_datetime: "2023-05-10 08:00:00",
      end_datetime: "2023-05-10 18:00:00",
    },
  ]);
};
