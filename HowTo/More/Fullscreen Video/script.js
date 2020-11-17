const video = document.querySelector('.my-video');
const btn = document.querySelector('.pause-btn');
const banner = document.querySelector('.banner');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    btn.innerText = 'Pause';
  } else {
    video.pause();
    btn.innerText = 'Play';
  }
});

banner.addEventListener('mouseover', () => {
  btn.style.display = 'block';
});

banner.addEventListener('mouseleave', () => {
  btn.style.display = 'none';
});
