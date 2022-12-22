const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const duplicateName = () => {
  if (nameInputEl.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = nameInputEl.value;
  }
};

nameInputEl.addEventListener('input', duplicateName);
