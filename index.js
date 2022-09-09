const http = require("http");

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World Gamification");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
