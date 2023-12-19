window.onload = function () {
  counter();
};

const conjugatedVerbs = document.getElementById("conjugated_verbs");
const containerBgFilter = document.getElementById("container_bg_filter");
const container = document.getElementById("container");
const check = document.getElementById("sichern_btn");
const counterBubble = document.getElementById("counter_bubble");
const conjugationBox = document.getElementById("conjugation_box");
let verbList = [];

// Listing conjugated verbs
check.addEventListener("click", checked);
function checked() {
  // Variable storing the value of the input field to conjugate.
  let verbConjugations = [];
  verbConjugations.push(document.getElementById("verb_input").value);
  console.log(verbConjugations[0]);

  // Selecting "table" which has the current conjugated verb and its 6 items +
  // item 0 containing the inputed verb or first value.
  const rows = document.getElementsByTagName("table")[0].rows;

  // Pushing the 6 conjugated verbs to the verbConjugations array.
  for (let i = 0; i < rows.length; i++) {
    verbConjugations.push(rows[i].lastChild.innerText);
  }
  console.log(verbConjugations);
  verbList.push(verbConjugations);

  var alreadyConjugated = false;

  // Pushing new array into html list container if the value is not already
  // conjugated
  for (const child of conjugatedVerbs.children) {
    if (child.id === verbConjugations[0]) {
      alreadyConjugated = true;
      break;
    }
  }

  if (alreadyConjugated) {
    conjugationBox.style.backgroundColor = "rgb(255 74 74 / 84%)";
    check.innerText = "Schon gespeichert";
    setTimeout(function () {
      check.innerText = "Speichern";
      conjugationBox.style.backgroundColor = "rgba(0, 0, 0, 0.84)";
    }, 1000);
  } else {
    let verbBox = `<div id="${verbConjugations[0]}" class="boxbox">
    <h1>${verbConjugations[0]}</h1>
    <div class=verb_row><p class="pronoun_cell">ich</p><p class="verb_cell">${verbConjugations[1]}</p></div>
    <div class=verb_row><p class="pronoun_cell">du</p><p class="verb_cell">${verbConjugations[2]}</p></div>
    <div class=verb_row><p class="pronoun_cell">er/sie/es</p><p class="verb_cell">${verbConjugations[3]}</p></div>
    <div class=verb_row><p class="pronoun_cell">wir</p><p class="verb_cell">${verbConjugations[4]}</p></div>
    <div class=verb_row><p class="pronoun_cell">ihr</p><p class="verb_cell">${verbConjugations[5]}</p></div>
    <div class=verb_row><p class="pronoun_cell">sie/Sie</p><p class="verb_cell">${verbConjugations[6]}</p></div>
    <span class="material-symbols-outlined delete_btn_in_box" onclick="logClickedElement(event)">delete</span>
    </div>`;
    conjugatedVerbs.innerHTML += verbBox;
    // Add to counter
    counter();
  }
}

// Scrolling opacity effect
window.addEventListener("scroll", scrollBgOpacity);
function scrollBgOpacity() {
  const opacity = Math.min(0.6, window.scrollY / 900);
  if (conjugatedVerbs) {
    containerBgFilter.style.opacity = opacity;
  }
}

// Deleting conjugated verbs
function logClickedElement(event) {
  var clickedElement = event.target;
  clickedElement.parentElement.remove();
  counter();
}

// Counter for the number of conjugated verbs
function counter() {
  counterBubble.innerHTML = document.querySelectorAll(
    "#conjugated_verbs .boxbox"
  ).length;
}
