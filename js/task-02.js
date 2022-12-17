const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let itemsEl = [];

for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  itemsEl.push(itemEl);
}

const listEl = document.querySelector('#ingredients');
listEl.append(...itemsEl);
