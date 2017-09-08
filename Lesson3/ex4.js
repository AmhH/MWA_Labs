var fs = require('fs');
var zlib = require('zlib');
/*var gzib = zlib.createGzip();
var readable = fs.createReadStream(__dirname + '/source.txt');
var compressed = fs.createWriteStream(__dirname + '/destination.txt.gz');

readable.pipe(gzib).pipe(compressed);*/

var gUnzip = zlib.createGunzip();
var read = fs.createReadStream(__dirname + '/destination.txt.gz');
var uncomp = fs.createWriteStream(__dirname + '/unzipped.txt');

read.pipe(gUnzip).pipe(uncomp);
console.log(__dirname);
