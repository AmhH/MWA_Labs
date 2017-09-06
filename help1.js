/*setTimeout(function(){
    console.log('World');
}, 2000);
console.log('Hello');

var open = false;
setTimeout(function(){
    open = true;
}, 2000)
while(!open){}
console.log('opened!');

const add = (a, b) => {
    for(let i=0; i<9e7; i++){   }
    console.log(a+b);
}
console.log('start');
const A = add(1,2);
const B = add(2,3);
console.log('end');

const add = (a, b) => {
    return setTimeout(()=>{console.log(a+b)}, 0);
    console.log(a+b);
}
console.log('start');
const A = add(1,2);
const B = add(2,3);
console.log('end');
function findMax(){
    var i;
    var max = -Infinity;
    for(i=0; i<arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1,123,500,115,44,88));
const details = ['ame', 123, 'mum.edu'];
const [name, id, website] = details;
console.log(name);
const course = {
    courseName: 'Modern Web Applications',
    technologies: ['NodeJS', 'NoSQL', 'AngularJs']
};
const gainedKnowledge = ['MongoDB', 'TypeScript', ...course.technologies];
console.log(gainedKnowledge);
const [father, mother, uncle, ...chiildren] = gainedKnowledge;
console.log(father);
console.log(mother);
console.log(chiildren);
var foo = 'foo';
var bar = 'bar';

console.log(`The first thing is ${foo} 
and the other thing is ${bar}`);

var things = ['a', 'b', 'c'];
for(let alphabet of things.entries()){
    console.log(alphabet);
}
const sum = (x, y) => x + y;
let students = [
    {name: 'Anna', grade: 6},
    {name: 'John', grade: 4},
    {name: 'Maria', grade: 9}
];
const total = students.reduce((sum, student) => sum + student.grade, null);
console.log(total);*/
const compose = (f,g) => x => f(g(x));
const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const su = compose(exclaim, toUpperCase);
console.log(su("It's snowing"));