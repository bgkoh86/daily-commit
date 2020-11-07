const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function() {
  if (matchMedia("(prefers-color-scheme: dark").matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});
