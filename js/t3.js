/* The following values are just for testing
The code will be tested by changing the marks of
quizzes, assignments, project, midterm and final*/
var quizzes = [9, 9, 10, 10];
var assigns = [9, 10, 10, 10, 9];
var project = 8;
var midterm = 80;
var final = 70;

var marks = 1.0;

//finding the average grade for the quizzes
let quizzes_avg = 0
for (const value of quizzes) {
  quizzes_avg += value;
}
quizzes_avg = (quizzes_avg / 4) * 10

//finding the average grade for the assignemnts
let assigns_avg = 0
for (const value of assigns) {
  assigns_avg += value;
}
assigns_avg = (assigns_avg / 5) * 10

//Calculate total weighted average (final grade)
var grade = (quizzes_avg * 0.3) + (assigns_avg * 0.2) + (project) + (midterm * 0.2) + (final * 0.2)

//Output final grade
var elgrade = document.getElementById('grade');
elgrade.textContent = grade;
