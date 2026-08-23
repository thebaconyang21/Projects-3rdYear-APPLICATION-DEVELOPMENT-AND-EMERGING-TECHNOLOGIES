// Step1: Create variables
// Step2: Get input from the user

let studentName = document.getElementById("studentName");
let age = document.getElementById("age");
let course = document.getElementById("course");
let yearlevel = document.getElementById("yearlevel");
let addStudent = document.getElementById("addStudent");
let studentInfo = document.getElementById("studentInfo");

addStudent.addEventListener("click", function(){
    console.log(studentName.value);
    console.log(age.value);
    console.log(course.value);
    console.log(yearlevel.value);

studentInfo.innerHTML = "<h3>Student Record</h3>" +
                            "Name: " + studentName.value + "<br>" +
                             "Age: " + age.value + "<br>" + 
                             "Course: " + course.value + "<br>" +
                             "Year Level: " + yearlevel.value;

    studentName.value = "";
    age.value = "";
    course.value = "";
    yearlevel.value = "";
});

// let studentName = prompt("What is your name?");
// let age = prompt("What is your age?");
// let course = prompt("What is your course?");
// let yearLevel = prompt("What is your year level?");

// console.log(studentName);
// console.log(age);
// console.log(course);
// console.log(yearLevel);

// let studentInfo = document.getElementById("studentInfo");

// studentInfo.innerHTML = "Name: " + studentName + "<br>" +
//                         "Age: " + age + "<br>" + 
//                         "Course: " + course + "<br>" +
//                         "Year Level: " + yearLevel;