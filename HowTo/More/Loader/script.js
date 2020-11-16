// elements 
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

setTimeout(showPage, 4000);

function showPage() {
  loader.style.display = "none";
  content.style.display = "block";
}