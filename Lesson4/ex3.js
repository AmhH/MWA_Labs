const os = require('os');
const Rx = require('@reactivex/rxjs');
var checkSystem = new Promise(function (resolve, reject){
        setTimeout(function (){
            if(os.cpus().length > 2 && os.totalmem() > 2e9){
            resolve('System is checked successfully');
            } else {
            reject(os.cpus().length > 2 ? 'This app needs at least 2GB of RAM' : 'Processor is not supported');
            }
        }, 2000);
    });

Rx.Observable.fromPromise(checkSystem)
             .subscribe(e => console.log(e));
console.log('Cheeking your system...');