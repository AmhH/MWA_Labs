var util = require('util');
function Student (){
    this.city = 'Fairfield';
    this.campus = 'MUM';
}
Student.prototype.getLocation = function (){
    console.log(`Location is: ${this.city} - ${this.campus}`);
}
function Compro (){
    Student.call(this);
    this.number = '98-234';
}
util.inherits(Compro, Student);
Compro.prototype.getNumber = function(){
    console.log(`Student id: ${this.number}`);
}
var comprsSt = new Compro();
comprsSt.getLocation();
comprsSt.getNumber();