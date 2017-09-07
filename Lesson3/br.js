var event = require('events');

class Clock extends event {
    constructor() {
        super();
    }
    tickEvent() {
        this.emit("tick", "Woohoo");
    }
}

var objectClock = new Clock();
objectClock.on("tick", (msg) => {
    let i = 0;
    setInterval(() => {
        if (i === 10) {
            clearInterval(this);
            return;
        }
        else {
            console.log(msg);
            i++;
        }
    }, 1000);

});
objectClock.tickEvent();