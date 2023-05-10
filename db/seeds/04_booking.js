// booking.js
exports.seed = async function (knex) {
  await knex("booking").del();
  await knex("booking").insert([
    {
      id: "9a6d1b6c-fafc-4f4a-8c6d-b9136cbf4a52",
      plate_id: "bf30d7b5-678b-4f98-bd1e-9c9a1fe16252",
      plate_number: "ABC123",
      parking_id: "2904a3a4-70e8-4481-9b11-3c3cd3d69764",
      start_datetime: "2023-05-08 08:00:00",
      end_datetime: "2023-05-09 18:00:00",
    },
    {
      id: "50cc96e9-cd8a-46b9-955e-5a57d5c8e65f",
      plate_id: "e045bb6d-c2d1-4d8f-9b99-12c84d1f3097",
      plate_number: "ABC456",
      parking_id: "24aa1c3e-539c-4f3b-89e8-828212998b61",
      start_datetime: "2023-05-08 08:00:00",
      end_datetime: "2023-05-09 18:00:00",
    },
    {
      id: "015bc2fb-12ed-4b95-8c05-31a94038b1a6",
      plate_id: "a0b21d7c-384a-4e7c-9ec9-14c1b47a30d3",
      plate_number: "DEF963",
      parking_id: "a2f0e0d5-240a-495d-b211-0a7b63a09116",
      start_datetime: "2023-05-08 08:00:00",
      end_datetime: "2023-05-09 18:00:00",
    },
  ]);
};
