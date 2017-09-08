function slow(callback) {
    setTimeout(function () {
        if (Math.random() > 0.5) {
            return callback("Error: Couldn't get the data", null);
        }
        callback(null, {id: 12345 });
    }, 1000);
}
/*function exec(fn) {
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
}*/
function exec(fn) {
    var er = "";
    var data = "";
    fn(function (error, obj) {
        er = error;
        data = obj;
    });
    return {
        done: function (f) {
            setTimeout(function () {
                if (data) {
                   f(data);
                }
            }, 500);
            return this;
        },
        fail: function (f) {
            setTimeout(function () {
                if (er) {
                    f(er);
                }
            }, 500);
        }
    }
}

exec(slow).done(function (data) { console.log(data) })
          .fail(function (err) { console.log("Error: " + err) });