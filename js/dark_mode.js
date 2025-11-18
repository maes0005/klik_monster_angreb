const html = document.querySelector("html");
const btn = document.querySelector("#dark_mode");

function dark_modeTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", dark_modeTheme);
