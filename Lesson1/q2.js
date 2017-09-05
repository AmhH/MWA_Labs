window.onload = function (){
    var library = [
        {
            prof: 'Assad Saad',
            course: 'WAP',
            CourseID: 'CS452'
        },
        {
            prof: 'RakeshShrestha Saad',
            course: 'WAA',
            CourseID: 'CS545'
        },
        {
            prof: 'Steve Nolle',
            course: 'SWE',
            CourseID: 'CS425'
        }

    ];

    library.sort((a, b) => a.course < b.course ? -1 : 1);
    console.log( library);
}