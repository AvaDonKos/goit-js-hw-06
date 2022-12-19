const decBtnEl = document.querySelector('button[data-action = "decrement"]');
const spanEl = document.querySelector('#value');
const incBtnEl = document.querySelector('button[data-action = "increment"]');

let valueCounter = 0;

decBtnEl.addEventListener('click', () => {
  valueCounter -= 1;
  spanEl.textContent = valueCounter;
});

incBtnEl.addEventListener('click', () => {
  valueCounter += 1;
  spanEl.textContent = valueCounter;
});
