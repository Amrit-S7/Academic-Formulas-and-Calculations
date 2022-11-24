courses = ['CP102', 'CP104', 'CP164', 'CP312', 'CP202', 'CP414', 'CP321', 'CP361', 'CP112', 'CP211']
random_course = Math.floor(Math.random() * courses.length);
var course = 'You are registered in the course: ' + (courses[random_course])

var elcourse = document.getElementById('course');
elcourse.textContent = course;
