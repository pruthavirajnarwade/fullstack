const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "companydb",
  password: "Pruthaviraj2006",
  port: 5432,
});

module.exports = pool;