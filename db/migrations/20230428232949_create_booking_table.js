/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("parking", (table) => {
      table.uuid("id").primary();
      table.integer("spot_number").notNullable();
      table.boolean("is_booked").notNullable().defaultTo(false);
      table.timestamps(true, true);
    }),

    knex.schema.createTable("booking", (table) => {
      table.uuid("id").primary();
      table
        .uuid("parking_id")
        .references("parking.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("plate_id")
        .references("plate.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("plate_number").notNullable();
      table.timestamp("start_datetime").defaultTo(knex.fn.now());
      table.timestamp("end_datetime").defaultTo(knex.fn.now());
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("booking"),
    knex.schema.dropTable("parking"),
  ]);
};
