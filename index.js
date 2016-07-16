'use strict';

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(createServer);

function createServer(req, res) {
  res.end('02/staging-test');
  console.log('04/piplene-test-1');
}

server.listen(port, () => console.log(`server listening on port ${port}`));
