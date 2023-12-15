const conjugatedVerbs = document.getElementById("conjugated_verbs");
const containerBgFilter = document.getElementById("container_bg_filter");
const container = document.getElementById("container");
const check = document.getElementById("sichern_btn");
const printBtn = document.getElementById("print_btn");
let verbList = [];

document.getElementById("counter_bubble").innerHTML = document.querySelectorAll(
  "#conjugated_verbs .boxbox"
).length;

check.addEventListener("click", checked);
function checked() {
  let verbConjugations = [];
  verbConjugations.push(document.getElementById("verb_input").value);
  const rows = document.getElementsByTagName("table")[0].rows;
  for (let i = 0; i < rows.length; i++) {
    verbConjugations.push(rows[i].lastChild.innerText);
  }
  verbList.push(verbConjugations);
  console.log(verbList);

  let verbBox = `<div id="${verbConjugations[0]}_verb_box" class="boxbox">
    <h1>${verbConjugations[0]}</h1>
    <div class=verb_row><p class="pronoun_cell">ich</p><p class="verb_cell">${verbConjugations[1]}</p></div>
    <div class=verb_row><p class="pronoun_cell">du</p><p class="verb_cell">${verbConjugations[2]}</p></div>
    <div class=verb_row><p class="pronoun_cell">er/sie/es</p><p class="verb_cell">${verbConjugations[3]}</p></div>
    <div class=verb_row><p class="pronoun_cell">wir</p><p class="verb_cell">${verbConjugations[4]}</p></div>
    <div class=verb_row><p class="pronoun_cell">ihr</p><p class="verb_cell">${verbConjugations[5]}</p></div>
    <div class=verb_row><p class="pronoun_cell">sie/Sie</p><p class="verb_cell">${verbConjugations[6]}</p></div>
    <span class="material-symbols-outlined"> delete </span>
  </div>`;
  conjugatedVerbs.innerHTML += verbBox;

  document.getElementById("counter_bubble").innerHTML =
    document.querySelectorAll("#conjugated_verbs .boxbox").length;
}

window.addEventListener("scroll", scrollBgOpacity);
function scrollBgOpacity() {
  const opacity = Math.min(0.6, window.scrollY / 900);
  if (conjugatedVerbs) {
    containerBgFilter.style.opacity = opacity;
  }
}

function deleteBtn() {
  this.parentNode.remove();
}
