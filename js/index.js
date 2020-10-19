'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
  bodyColor: document.querySelector('body'),
}

let colorId = null;

const startColorShow =()=>{
  // console.log('Start');
  colorId = setInterval(()=> {
  let changeColors = randomIntegerFromInterval(0, colors.length);
  refs.bodyColor.style.background = colors[changeColors]
}, 1000);
refs.startBtn.disabled = true;
  }

const stopColorShow = () => {
  // console.log('Stop');
  clearInterval(colorId)
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startColorShow);
refs.stopBtn.addEventListener('click', stopColorShow);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

});
