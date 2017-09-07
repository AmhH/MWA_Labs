var fs = require('fs');
//stream one
require('http').createServer(function(req, res){
                         fs.createReadStream('world.jpg').pipe(res);
                     }).listen(8080, () => console.log('Starting server ...')); 
//stream two   
/*var server = require('http').createServer();
server.on('request', function(req, res){
                        fs.createReadStream('big.jpg').pipe(res);
                    }).listen(8080);*/
//buffer 
/*require('http').createServer(function(req, res){
                        fs.readFile('world.jpg', (err, image) => {
                                    if(err) throw err;
                                    res.end(image);
                                });
                    }).listen(8000, () => console.log('Starting server ...'));*/