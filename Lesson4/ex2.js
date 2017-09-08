const os = require('os');

var checkSystem = function(){
    return new Promise(function (resolve, reject){
        //console.log('Cheeking your system...');
        if(os.cpus().length > 2 && os.totalmem() > 2e9){
            resolve('System is checked successfully');
        } else {
            reject(os.cpus().length > 2 ? 'This app needs at least 2GB of RAM' : 'Processor is not supported');
        }
    });
}
checkSystem().then(data => console.log(data))
             .catch(err => console.log(err));
console.log('Cheeking your system...');