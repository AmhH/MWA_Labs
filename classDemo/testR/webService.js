var server = require('http').createServer();

server.on('request', (req, res)=>{
                            res.writeHead(200,{'Content-Type': 'text/plain'});
                            res.write('Hello World');
                            res.end();
                        });
server.listen(4000);