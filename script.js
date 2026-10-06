const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let bluriness = 100;

const clearBlur = () => {
  if (load == 99) {
    setInterval(() => {
      loadText.style.opacity = 0;
    }, 100);
    clearInterval(tick);
  }

  load++;
  bluriness--;

  loadText.textContent = `${load}%`;
  bg.style.filter = `blur(${bluriness}px)`;
};

const tick = setInterval(clearBlur, 30);
