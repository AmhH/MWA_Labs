/*var buff = new Buffer('Hello', 'utf8');
console.log(buff[2]);
buff.write('wo');
console.log(buff.toString());
var bu = new Buffer('this is the string in my buffer');
var slice = bu.slice(10,20);
console.log(slice.toString());

var fs = require('fs');
var path = require('path');
var greet = fs.readFileSync(path.join(__dirname + '/greet.txt'), 'utf8');
console.log(greet);

var greets = fs.readFile(path.join(__dirname + '/greet.txt'), 'utf8', (err, data)=> console.log(data));
console.log('Done');*/
var fs = require('fs');
var path = require('path');
/*fs.writeFile('st.txt','Hello',(err, data)=>{
                            if(err) throw err;
                            console.log('Done');
                        });*/
var readable = fs.createReadStream('greet.txt',{encoding: 'utf8', highWaterMark: 16*1024});
readable.on('data', (chunk)=> {
                        console.log(chunk.length);
                    });