const itemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, itemEl.length);

const categoryEl = document.querySelectorAll(`.item h2`);

console.log(`Category:`, categoryEl[0].textContent);

const animalEl = document.querySelectorAll(`.js-animal_list`);
console.log(`Elements:`, animalEl.length);

console.log(`Category:`, categoryEl[1].textContent);

const productEl = document.querySelectorAll(`.js-product_list`);
console.log(`Elements:`, productEl.length);

console.log(`Category:`, categoryEl[2].textContent);

const technologyEl = document.querySelectorAll(`.js-technology_list`);
console.log(`Elements:`, technologyEl.length);