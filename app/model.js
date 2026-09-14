export function getStudents() {
  return JSON.parse(localStorage.getItem("students")) || [];
}

export function setStudents(students) {
  localStorage.setItem("students", JSON.stringify(students));
}