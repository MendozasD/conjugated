const button = document.getElementById("print_btn");
button.addEventListener("click", generatePDF);
function generatePDF() {
  // Choose the element that your content will be rendered to.
  const element = document.getElementById("conjugated_verbs");
  // Choose the element and save the PDF for your user.
  html2pdf().from(element).save();
}
