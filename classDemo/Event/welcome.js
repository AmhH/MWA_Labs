var EventEmitter = require('events');
var util = require('util');

function Welcome(){
    EventEmitter.call(this);
    this.message = 'Welcome New Student';
}

util.inherits(Welcome, EventEmitter);
var st = new Welcome();
st.on('newStu', function(data){
    console.log('Welcome ' + data);
});
Welcome.prototype.visit = function(data) {
    this.emit('newStu', data);
}
st.visit('Amsalu');