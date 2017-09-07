var EvenEmitter = require('events');
class Welcome extends EvenEmitter{
    constructor(){
        super();
         this.message = 'Welcome New Student';
    }
    visit(data){
        console.log(this.message);
        this.emit('newStu', data);
    }
}

var st = new Welcome();
st.on('newStu', function(data){
    console.log('Welcome ' + data);
});

st.visit('Amsalu');