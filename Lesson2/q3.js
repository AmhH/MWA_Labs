function slow(callback) {
    setTimeout(function () {
        if (Math.random() > 0.5) {
            return callback("Error: Couldn't get the data", null);
        }
        callback(null, {id: 12345 });
    }, 1000);
}

function exec(fn) {
    return {
        done: function (fnDone){

        },
        fail: function (fnFail){

        }
    }
}

exec(slow).done(function (data) { console.log(data) })
          .fail(function (err) { console.log("Error: " + err) });