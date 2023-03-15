/* Esercizio 1 */
const saveButton = document.getElementById("save");
const removeButton = document.getElementById("remove");
const inputField = document.getElementById("regName");
const personSpan = document.getElementById("person");

const savedName = localStorage.getItem("name");
if (savedName) {
  personSpan.textContent = savedName;
}

saveButton.addEventListener("click", function () {
  let name = inputField.value.trim();
  if (name) {
    localStorage.setItem("name", name);
    personSpan.textContent = name;
  }
  inputField.value = "";
});

removeButton.addEventListener("click", function () {
  localStorage.removeItem("name");
  personSpan.textContent = "";
  inputField.value = "";
});

/* Esercizio 2 */

if (sessionStorage.getItem("timePassed")) {
  var timePassed = sessionStorage.getItem("timePassed");
} else {
  var timePassed = 0;
}

var counterElement = document.getElementById("counter");

function addTime() {
  timePassed++;
  sessionStorage.setItem("timePassed", timePassed);
  counterElement.textContent = timePassed;
}

setInterval(addTime, 1000);
