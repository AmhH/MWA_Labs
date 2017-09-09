const {fork} = require("child_process");
const server = require('http').createServer();
var fs = require('fs');
const url = require('url');

server.on('request', (request, response) => {
                          const myUrl = url.parse(request.url, true);
                          const filePath = myUrl.query.url;
                          var read = fork('read.js');
                          read.send(filePath);
                          read.on('response', data => {
                              //response.end(data);
                          })
                    }).listen(8888);
