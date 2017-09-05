window.onload = function (){
    function Person(name){
        this.name = name;
    }

    let teacherA = new Person("John");
    let teacherB = new Person("Doe");

    Person.prototype.teach = function (subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
    teacherA.teach("MWA");
    teacherB.teach("WAP");
}