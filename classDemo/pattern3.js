function Course(){
    this.courseName = 'CS472';
    this.get = function (){
        console.log(this.courseName);
    }
}
//module.exports = new Course();
//4
module.exports = Course;