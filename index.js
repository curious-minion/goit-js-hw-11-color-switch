const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const intervalDelay = 1000;
let intervalID = null;

refs.startBtn.addEventListener('click', onChangeBodyBgrColorClick);

function onChangeBodyBgrColorClick() {
  refs.startBtn.setAttribute('disabled', "");
  intervalID = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
},
    intervalDelay);
}

refs.stopBtn.addEventListener('click', onStopChangeClick);


function onStopChangeClick() {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(intervalID);
}