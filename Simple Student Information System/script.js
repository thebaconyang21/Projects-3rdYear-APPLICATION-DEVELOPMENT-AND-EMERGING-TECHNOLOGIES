// Step1: Create variables
// Step2: Get input from the user

// Get the input elements

let studentName = document.getElementById("studentName");
let age = document.getElementById("age");
let course = document.getElementById("course");
let yearlevel = document.getElementById("yearlevel");

// Get the button

let addStudent = document.getElementById("addStudent");

// Get the table body

let studentInfo = document.getElementById("studentInfo");

// Student number

let studentNumber = 1;

// When the button is clicked

addStudent.addEventListener("click", function() {

    // Get the values from the form

    let nameValue = studentName.value;
    let ageValue = age.value;
    let courseValue = course.value;
    let yearValue = yearlevel.value;


    // Create a new table row

    let newRow = document.createElement("tr");


    // Put the student's information inside the row

    newRow.innerHTML = 
        "<td>" + studentNumber + "</td>" +
        "<td>" + nameValue + "</td>" +
        "<td>" + ageValue + "</td>" +
        "<td>" + courseValue + "</td>" +
        "<td>" + yearValue + "</td>";


    // Add the new row to the table

    studentInfo.appendChild(newRow);

    // Increase the student number

    studentNumber++;

    // Clear the form

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