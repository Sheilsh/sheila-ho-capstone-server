exports.seed = async function (knex) {
  await knex("plate").del();
  await knex("plate").insert([
    {
      id: "bf30d7b5-678b-4f98-bd1e-9c9a1fe16252",
      user_id: "f44d6d1c-90f3-45c3-92d2-b0fd52e9a72c",
      license_plate: JSON.stringify([
        { plate_number: "ABC852" },
        { plate_number: "DEF963" },
      ]),
    },
    {
      id: "e045bb6d-c2d1-4d8f-9b99-12c84d1f3097",
      user_id: "098ac9d2-b96e-4761-a94c-50e74012c1f1",
      license_plate: JSON.stringify([
        { plate_number: "BBC456" },
        { plate_number: "FEF789" },
      ]),
    },
    {
      id: "a0b21d7c-384a-4e7c-9ec9-14c1b47a30d3",
      user_id: "6f141a6b-7424-4a2b-ba10-4d4c738f9a9c",
      license_plate: JSON.stringify([
        { plate_number: "CBC852" },
        { plate_number: "SKL852" },
      ]),
    },
  ]);
};
