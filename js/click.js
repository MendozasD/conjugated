const counterBtn = document.getElementById("counter_bubble");
const sichernBtn = document.getElementById("sichern_btn");

sichernBtn.addEventListener("click", counterUpdateAnimation);

function counterUpdateAnimation() {
  counterBtn.classList.add("bnw_animation");
  counterBtn.style.transform = "rotate(15deg)";
  setTimeout(function () {
    counterBtn.classList.remove("bnw_animation");
  }, 1000);
}
