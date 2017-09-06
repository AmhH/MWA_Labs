/*let courseInstance = require('./pattern3');
courseInstance.get();
courseInstance.courseName = 'CS572';
let courseInstance2 = require('./pattern3');
courseInstance2.get();*/
//4
let course1 = require('./pattern3');
courseInstance = new course1();
courseInstance.get();
courseInstance.courseName = 'CS572';
let course2 = require('./pattern3');
courseInstance2 = new course2();
courseInstance2.get();