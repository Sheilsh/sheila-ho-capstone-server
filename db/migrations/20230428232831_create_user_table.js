/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").primary();
    table.string("full_name").notNullable();
    table.string("unit_number").notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("phone_number").notNullable();
    table.string("email").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
