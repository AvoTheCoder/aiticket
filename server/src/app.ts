// server/src/app.ts
import express from "express";
import cors from "cors";
import pool from "./db";

const app = express();

app.use(cors());
app.use(express.json());

// quick sanity route
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/auth/login", async (req, res) => {
  try {
    // DEBUG: show exactly what the backend received
    console.log("✅ /api/auth/login HIT");
    console.log("Headers content-type:", req.headers["content-type"]);
    console.log("Body:", req.body);

    const { email, password } = req.body ?? {};

    // DEBUG: confirm fields exist
    if (!email || !password) {
      console.log("❌ Missing email or password", { email, password });
      return res.status(400).json({
        success: false,
        error: "Missing email or password",
      });
    }

    console.log("Login attempt:", { email, passwordLength: String(password).length });

    // NOTE: plain-text password check for now (development only)
    const result = await pool.query(
      "SELECT id, email, password FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    console.log("DB rows matched:", result.rows.length);
    if (result.rows.length) {
      console.log("Matched user:", { id: result.rows[0].id, email: result.rows[0].email });
    }

    if (!result.rows.length) {
      return res.status(401).json({ success: false });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({ success: false });
  }
});

export default app;