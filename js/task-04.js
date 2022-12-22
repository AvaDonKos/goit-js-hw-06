const decBtnEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incBtnEl = document.querySelector('button[data-action="increment"]');

let valueCounter = 0;

const decreaseValue = () => {
  valueCounter -= 1;
  valueEl.textContent = valueCounter;
};

decBtnEl.addEventListener('click', decreaseValue);

const increaseValue = () => {
  valueCounter += 1;
  valueEl.textContent = valueCounter;
};

incBtnEl.addEventListener('click', increaseValue);
