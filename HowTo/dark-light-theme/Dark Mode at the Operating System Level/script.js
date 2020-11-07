const btn = document.querySelector(".btn-toggle");

if (localStorage.theme == "dark") {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.add("light-theme");
}

btn.addEventListener("click", function() {
  if (matchMedia("(prefers-color-scheme: dark").matches) {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  } else {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
})

