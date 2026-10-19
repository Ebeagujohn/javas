const studentForm = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");

const cardResult = document.getElementById("cardResult");
const cardStudentName = document.getElementById("cardStudentName");
const cardSchoolName = document.getElementById("cardSchoolName");
const cardCourse = document.getElementById("cardCourse");
const cardNumber = document.getElementById("cardNumber");

studentForm.addEventListener("submit", function(e){
e.preventDefault();
const formData = new FormData(studentForm);
const studentName = formData.get("studentName")?.trim();
const schoolName = formData.get("schoolName")?.trim();
const course = formData.get("course")?.trim();
if (!studentName || !schoolName  || !course ){
    formMessage.textContent = "Please fill all fields before you submit";
    return;
}
formMessage.textContent = ""


cardStudentName.textContent = studentName;
cardSchoolName.textContent = schoolName;
cardCourse.textContent = course;
const randomDigit = Math.floor(1000 + Math.random() * 9000);
cardNumber.textContent = `Card No: ${randomDigit}`;

cardResult.hidden = false;
})