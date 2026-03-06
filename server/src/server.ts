import app from "./app";

const PORT = 3000;

console.log("🔥 server.ts reached, starting listen...");

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend listening on http://127.0.0.1:${PORT}`);
});