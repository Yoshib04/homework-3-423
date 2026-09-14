import { getStudents, setStudents } from "./model.js";

document.querySelector("#addStudent").addEventListener("click", addStudent);
document.querySelector("#displayStudents").addEventListener("click", displayStudents);

function addStudent() {
  let students = getStudents();

  let name = document.querySelector("#name").value.trim();
  let age = document.querySelector("#age").value.trim();
  let phone = document.querySelector("#phone").value.trim();
  let email = document.querySelector("#email").value.trim();
  let classesInput = document.querySelector("#classes").value.trim();

  if (!name || !age || !phone || !email || !classesInput) {
    alert("Please fill in all fields.");
    return;
  }

  let classesArray = classesInput
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);

  let newStudent = {
    name: name,
    age: age,
    phone: phone,
    email: email,
    classes: classesArray,
  };

  students.push(newStudent);
  setStudents(students);

  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#classes").value = "";

  console.log("Student added:", newStudent);

  displayStudents();
}

function displayStudents() {
  let students = getStudents();
  let htmlString = "";

  if (students.length === 0) {
    htmlString = "<p style='color: #888;'>No students added yet.</p>";
  } else {
    students.forEach((student) => {
      htmlString += `
        <div class="student-card">
          <h3>${student.name}</h3>
          <p>Age: ${student.age}</p>
          <p>Phone: ${student.phone}</p>
          <p>Email: ${student.email}</p>
          <p>Classes: ${student.classes.join(", ")}</p>
        </div>
      `;
    });
  }

  document.querySelector("#studentList").innerHTML = htmlString;
}