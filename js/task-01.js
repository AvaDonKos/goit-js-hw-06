const listEl = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((el) => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelectorAll('li').length}`);
});
