/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("parking", (table) => {
      table.uuid("id").primary();
      table.integer("spot_number").unique().notNullable();
      table.boolean("is_booked").notNullable().defaultTo(false);
      table.timestamps(true, true);
    }),

    knex.schema.createTable("booking", (table) => {
      table.uuid("id").primary();
      table
        .uuid("parking_id")
        .references("id")
        .inTable("parking")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .uuid("user_id")
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .uuid("plate_id")
        .references("id")
        .inTable("plate")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("plate_number").notNullable();
      table.timestamp("start_datetime").defaultTo(knex.fn.now()).notNullable();
      table.timestamp("end_datetime").notNullable();
      table.string("confirmation_number", 8).notNullable();
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.table("booking", (table) => {
      table.dropColumn("confirmation_number");
      table.dropForeign("parking_id");
      table.dropForeign("user_id");
      table.dropForeign("plate_id");
    }),
    knex.schema.dropTable("booking"),
    knex.schema.dropTable("parking"),
  ]);
};
