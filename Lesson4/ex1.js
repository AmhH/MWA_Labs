var fs = require('fs');
var server = require('http').createServer();
const url = require('url');
server.on('request', (request, response) => {
                        const myUrl = url.parse(request.url, true);
                        const filePath = myUrl.query.url;                        
                        fs.createReadStream(`./${filePath}`).pipe(response);
                    }).listen(8888);