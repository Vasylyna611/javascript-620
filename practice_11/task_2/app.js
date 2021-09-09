const personalmodule = require('./personalmodule.js');
const os = require('os')
const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let date = new Date;
  let greeting = `Date of request: ${date} \n${personalmodule.greetings(date, os.hostname)}`
  res.end(greeting);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});