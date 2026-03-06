import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ai_helpdesk",
  password: "3820",
  port: 5432,
});

// optional connection test
pool.query("SELECT NOW()")
  .then(res => {
    console.log("✅ DB CONNECTED", res.rows[0]);
  })
  .catch(err => {
    console.error("❌ Database connection error:", err);
  });

export default pool;