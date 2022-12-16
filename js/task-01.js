const list = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${list.length}`);

list.forEach((el) => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelectorAll('li').length}`);
});
