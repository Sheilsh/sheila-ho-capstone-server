// Update with your config settings.

require("dotenv").config({ path: "../.env" });

module.exports = {
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    database: process.env.DB_LOCAL_DBNAME,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
