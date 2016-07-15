'use strict';

const http = require('http');
const port = 3000;

const server = http.createServer(createServer);

function createServer(req, res) {
  res.end('sm-test-server');
}

server.listen(port, () => console.log(`server listening on port ${port}`));
