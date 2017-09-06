function slow(callback) {
    setTimeout(function () {
        if (Math.random() > 0.5) {
            return process.nextTick(callback("Error: Couldn't get the data", null));
        }
        process.nextTick(callback(null, {id: 12345 }));
    }, 1000);
}

function exec(fn) {
    var doneProp, failProp;
    function callback(message, data){
        if(message){
            failProp = function (failFn){
                failFn(message);
            }
        } else {
            doneProp = function (doneFn){
                doneFn(data.id);
            }
        }
    }

    fn(callback);
    return {
        done: doneProp,
        fail: failProp
    }
}

exec(slow).done(function (data) { console.log(data) })
          .fail(function (err) { console.log("Error: " + err) });