/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.uuid("id").primary();
      table.string("user_name").notNullable();
      table.string("unit_number").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("user_phone").notNullable();
      table.string("user_email").notNullable();
      table.timestamps(true, true);
    })
    .createTable("license_plate", (table) => {
      table.uuid("id").primary();
      table.string("plate_number").notNullable();
      table
        .uuid("user_id")
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
