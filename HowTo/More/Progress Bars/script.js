let btn, i;
btn = document.querySelector(".btn");
i = 0;

btn.addEventListener("click", move);

function move() {
   let mybar, width, id;
   mybar = document.querySelector(".mybar");
   if (i == 0) {
      i = 1;
      width = 1;
      id = setInterval(frame, 10);
      
      function frame() {
         if (width >= 100) {
            clearInterval(id);
            i = 0;
         } else {
            width++;
            mybar.style.width = width + "%";
            mybar.innerText = width + "%";
         }
      }
   }
}

