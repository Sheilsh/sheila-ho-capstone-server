/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("user", (table) => {
      table.uuid("id").primary();
      table.string("full_name").notNullable();
      table.string("unit_number").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("phone_number").notNullable();
      table.string("email").notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTable("license_plate", (table) => {
      table.uuid("id").primary();
      table.string("plate_number").notNullable();
      table.string("plate_state").notNullable();
      table
        .uuid("user_id")
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    }),
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("user"),
    knex.schema.dropTable("license_plate"),
  ]);
};
