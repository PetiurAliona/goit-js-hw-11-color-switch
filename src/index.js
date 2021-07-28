const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
const startBtn = document.querySelector('.start-btn');



  document.querySelector('#root').addEventListener('click', e => {
       if (e.target.dataset.action === 'start') {
           timerId = setInterval(() => {
               document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
           }, 1000);
           startBtn.disabled = true;
       }
       if (e.target.dataset.action === 'stop') {
           clearTimeout(timerId);
           startBtn.disabled = false;
       }
})