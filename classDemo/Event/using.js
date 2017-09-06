var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('great', function (){
    console.log('Hi from here');
});
emtr.on('great', function (){
    console.log('Hi from there');
});
emtr.emit('great');
console.log('Hello');