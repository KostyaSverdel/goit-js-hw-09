const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.disabled = true;
let timerId = null;

refs.startBtn.addEventListener('click', startRender);
refs.stopBtn.addEventListener('click', stopRender);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function renderColorBody() {
  document.body.style.background = getRandomHexColor();
}

function startRender() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  timerId = setInterval(() => {
    renderColorBody();
  }, 1000);
}

function stopRender() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
