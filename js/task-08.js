const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('input[name="email"]');
const inputPasswordEl = document.querySelector('input[name="password"]');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputEmailEl.value === '' || inputPasswordEl.value === '') {
    alert('всі поля повинні бути заповнені');
  } else {
    
  }
});
