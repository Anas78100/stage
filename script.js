

function toggle_text() {
  var input = document.getElementById("prenom");
  var span = document.getElementById("span_txt");
  var formZone = document.getElementById("formZone");

  if (input.value.trim() === "") return;

  span.innerHTML = "Bienvenue sur mon site " + input.value + " 👋";
  span.style.display = "block";

  formZone.style.display = "none";
}

const { chars } = splitText('h4', { words: false, chars: true });


