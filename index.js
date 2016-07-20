'use strict';

const bunyan = require('bunyan');
const http = require('http');
const port = process.env.PORT || 3000;
const log = bunyan.createLogger({name: "sm-test-server"});

const server = http.createServer(createServer);

function createServer(req, res) {
  res.end('08/feature-08');
  log.info(res.statusCode);
}

server.listen(port, () => console.log(`server listening on port ${port}`));
