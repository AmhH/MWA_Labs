var fs = require('fs');
const url = require('url');

const read = (fileName) => {
                        console.log('Here one');
                        if(fileName != undefined)  {
                            /*fs.readFile(fileName, (err, data) => {
                                if(err) {throw err}
                                return data; });*/
                            const read = fs.createReadStream('./'+fileName);
                            return read;
                        }     
                    };

process.on('request', file => {
    console.log('Here one');
    var data = read(file);
    process.send(data.toString());
});