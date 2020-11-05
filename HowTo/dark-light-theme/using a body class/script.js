// javascript
const btn = document.querySelector(".btn-toggle")

btn.addEventListener('click', function() {
  document.body.classList.toggle("dark-theme");
});

// jquery
// $(document).ready(function() {
//   $(".btn-toggle").click(function() {
//     $("body").toggleClass("dark-theme");
//   })
// });
