const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School !\n');
});

module.exports = app;

if (require.main === module) {
    app.listen(1245);
  }
