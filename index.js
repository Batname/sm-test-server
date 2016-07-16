'use strict';

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(createServer);

function createServer(req, res) {
  res.end('08/feature-08');
}

server.listen(port, () => console.log(`server listening on port ${port}`));
