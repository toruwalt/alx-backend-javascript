const http = require('http');

const porty = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/message', (req, res) => {
  const message = 'Hello, this is a plain text message from your Node.js server!';
  res.send(message);
});

app.listen(porty, () => {
  console.log('...');
});

module.exports = app;
