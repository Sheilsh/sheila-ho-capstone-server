exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      user_name: "Jane Doe",
      unit_number: "100",
      address: "123 Queen St",
      city: "Toronto",
      user_phone: "+1 (646) 123-1234",
      user_email: "janedoe@gmail.com",
      license_plates: [
        {
          plate_number: "ABC123",
          plate_state: "ON",
        },
        {
          plate_number: "DEF456",
          plate_state: "ON",
        },
      ],
    },
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeaf8",
      user_name: "John Doe",
      unit_number: "102",
      address: "123 Queen St",
      city: "Toronto",
      user_phone: "+1 (645) 123-1234",
      user_email: "johndoe@gmail.com",
      license_plates: [
        {
          plate_number: "ABC456",
          plate_state: "ON",
        },
        {
          plate_number: "DEF789",
          plate_state: "ON",
        },
      ],
    },
    {
      user_name: "Joe Doe",
      unit_number: "103",
      address: "123 Queen St",
      city: "Toronto",
      user_phone: "+1 (643) 123-1234",
      user_email: "joedoe@gmail.com",
      license_plates: [
        {
          plate_number: "ABC852",
          plate_state: "ON",
        },
        {
          plate_number: "DEF963",
          plate_state: "ON",
        },
      ],
    },
  ]);
};
