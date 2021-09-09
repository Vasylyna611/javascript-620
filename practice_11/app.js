//-------TASK 1-------------

const http = require('http');
const os = require('os')
const path = require('path');
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
let message = `Current user name: ${os.hostname()} \n OS type: ${os.type()} \n System work time: ${os.uptime()} \n Current work directory: ${os.tmpdir()}`
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});