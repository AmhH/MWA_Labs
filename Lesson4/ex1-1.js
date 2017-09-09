var fs = require('fs');
const url = require('url');
var server = require('http').createServer();

server.on('request', (request, response) => {
                        const myUrl = url.parse(request.url, true);
                        const filePath = myUrl.query.url;
                        if(filePath){
                            fs.createReadStream(`./${filePath}`).pipe(response);
                        }     
                    }).listen(8888);
