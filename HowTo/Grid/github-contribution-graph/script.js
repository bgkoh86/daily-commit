const squares = document.querySelector(".squares");
for (let i = 1; i < 365; i++) {
  let level = Math.floor(Math.random() * 4);
  squares.insertAdjacentHTML('beforeend', `<li data-level=${level}></li>`);
};