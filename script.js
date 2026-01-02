function toggle_text() {
  var input = document.getElementById("prenom");
  var span = document.getElementById("span_txt");
  var formZone = document.getElementById("formZone");
  var welcomeSection = document.getElementById("welcome-form");

  if (!input || input.value.trim() === "") return;

  span.innerHTML = "Bienvenue sur mon site " + input.value + " !";
  span.style.display = "block";
  span.classList.add("show");

  formZone.style.display = "none";
  if (welcomeSection) {
    welcomeSection.style.display = "none";
  }
}
