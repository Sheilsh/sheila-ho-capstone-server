/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("plate", (table) => {
    table.uuid("id").primary();
    table
      .uuid("user_id")
      .references("user.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("plate_number").notNullable();
    table.string("province").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("plate");
};
