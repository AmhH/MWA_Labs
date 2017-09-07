const EventEmitter = require('events');

class clock extends EventEmitter{
    constructor(){
        super();
    }
    tick(data){
        setInterval(() =>this.emit('tick', data), 1000);
    }
}
var obj = new clock();
obj.on('tick', (data) => console.log(data));
obj.tick('woohoo');