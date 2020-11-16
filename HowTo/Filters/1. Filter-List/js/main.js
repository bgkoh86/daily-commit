// targets
const input = document.querySelector(".search-input");
// filter 
input.addEventListener("keyup", function() {
  let ul, li, inputVal, a, txtValue;
    ul = document.querySelector("ul");
    li = ul.querySelectorAll("li");
    inputVal = input.value.toUpperCase();
  
    for (let i = 0; i < li.length; i++) {
      a = li[i].querySelector("a");
      txtValue = a.innerText;

      if (txtValue.toUpperCase().indexOf(inputVal) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
})