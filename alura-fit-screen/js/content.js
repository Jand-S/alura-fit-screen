var fit = 0;

const interval = setInterval(() => {
  const constrolBar = document.querySelector('.vjs-control-bar');
  if (constrolBar) {
    clearInterval(interval);

    const button = document.createElement('button');
    button.classList.add('vjs-control');
    button.classList.add('vjs-button');
    button.innerHTML = '<span>fit-screen</span>';
    button.addEventListener('click', () => {
      fitScreen();
    })

    constrolBar.appendChild(button);

  }
}, 1000);

function fitScreen() {
  if (fit === 0) {
    const video = document.querySelector('#video-player');
    video.style.paddingTop = "56.32%";
    return fit = 1;
  }
  const video = document.querySelector('#video-player');
  video.style.paddingTop = "40%";
  fit = 0;
}