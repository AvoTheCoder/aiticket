const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.end("ok");
}).listen(PORT, "127.0.0.1", () => {
  console.log("✅ SMOKE server listening on http://127.0.0.1:" + PORT);
});
