const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (e) {
  console.log(e)
  e.preventDefault();
  const input = document.querySelector("input");
  console.log(input.value);
  localStorage.setItem("name", input.value);
});
//const getName = localStorage.getItem("name");
//console.log(getName);

//if (getName) {
 // form.classList.add("hide");
//} else {
 // form.classList.remove("hide");
//}

