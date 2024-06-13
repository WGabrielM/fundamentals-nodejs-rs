// ESModules => import/export
import http from "node:http";
// CommonJS => require
// const http = require('http')

const server = http.createServer((req, res) => {
  return res.end("Hello World");
});

server.listen(3333);
