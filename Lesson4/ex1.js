var fs = require('fs');
/*require('http').createServer(function(req, res){

                         fs.createReadStream('world.jpg').pipe(res);
                     }).listen(8080, () => console.log('Starting server ...')); */
var server = require('http').createServer();
const url = require('url');
server.on('request', (request, response) => {
                        const myUrl = url.parse(request.url, true);
                        const filePath = myUrl.query.url;                        
                        /*const read = fs.createReadStream(`./${filePath}`);
                        read.pipe(response);*/
                        fs.createReadStream(`./${filePath}`).pipe(response);
                    }).listen(8888);