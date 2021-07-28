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
const rootNode = document.querySelector('#root');

document.querySelector('#root').addEventListener('click', e => {
    if (e.target.dataset.action === 'start')
        timerId = setInterval(() => {
    rootNode.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
        }, 1000);
    if (e.target.dataset.action === 'stop')
         clearTimeout(timerId);
   
})