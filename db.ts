const Pool = require("pg").Pool;
import dotenv from "dotenv";
const isProduction = process.env.NODE_ENV === "production";
// ------------
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;



const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

// const pool = new Pool({
//   user: "postgres",
//   password: "new_password",
//   host: "localhost",
//   port: 5432,
//   database: "contactdata",
// });

export default pool;
