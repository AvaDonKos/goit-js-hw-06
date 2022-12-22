function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

const createBoxes = (amount) => {
  amount = inputEl.value;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${20 + i * 10}px`;
    newDiv.style.height = `${20 + i * 10}px`;
    divEl.append(newDiv);
  }
};

createBtnEl.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  divEl.innerHTML = '';
};

destroyBtnEl.addEventListener('click', destroyBoxes);
