// Step1: Create variables
// Step2: Get input from the user

let studentName = document.getElementById("studentName");
let age = document.getElementById("age");
let course = document.getElementById("course");
let yearlevel = document.getElementById("yearlevel");

let addStudent = document.getElementById("addStudent");
let studentInfo = document.getElementById("studentInfo");

let errorModal = document.getElementById("errorModal");
let closeModal = document.getElementById("closeModal");

let studentNumber = 1;

// CLOSE MODAL
closeModal.addEventListener("click", function() {
    errorModal.style.display = "none";
});

addStudent.addEventListener("click", function() {

    // Check if all fields have information
    if (
        studentName.value === "" ||
        age.value === "" ||
        course.value === "" ||
        yearlevel.value === ""
    ) {
        errorModal.style.display = "flex";
        return;
    }


    // Get the values
    let nameValue = studentName.value;
    let ageValue = age.value;
    let courseValue = course.value;
    let yearValue = yearlevel.value;


    // Create a new row
    let newRow = document.createElement("tr");


    // Put information inside the row
    newRow.innerHTML =
        "<td>" + studentNumber + "</td>" +
        "<td>" + nameValue + "</td>" +
        "<td>" + ageValue + "</td>" +
        "<td>" + courseValue + "</td>" +
        "<td>" + yearValue + "</td>";


    // Add the row to the table
    studentInfo.appendChild(newRow);


    // Increase student number
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