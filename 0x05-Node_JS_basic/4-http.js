const http = require('http');
const porty = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(porty, () => {
  console.log('...');
});

module.exports = app;