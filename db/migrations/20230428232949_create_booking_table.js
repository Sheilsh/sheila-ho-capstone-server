/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("booking", function (table) {
    table.uuid("id").primary();
    table
      .uuid("user_id")
      .references("id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .uuid("parking_id")
      .references("id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.datetime("start_datetime").notNullable();
    table.datetime("end_datetime").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("booking");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("booking");
};
