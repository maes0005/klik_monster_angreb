console.log("loaded instruction...");

document.querySelector("#foerste").addEventListener("click", funk1);
function funk1() {
  console.log("1. måde er loaded...");
}

document.querySelector("#anden").addEventListener("click", funk2);
function funk2() {
  console.log("2. måde er loaded...");
}

document.querySelector("#tredje").addEventListener("click", funk3);
function funk3() {
  console.log("3. måde er loaded...");
}
