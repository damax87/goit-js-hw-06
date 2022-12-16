const itemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, itemEl.length);

const categoryEl = document.querySelectorAll(`.item h2`);

const listEl = document.querySelectorAll(`.item ul`);

console.log(`Category:`, categoryEl[0].textContent);

console.log(`Elements:`, listEl[0].children.length);

console.log(`Category:`, categoryEl[1].textContent);

console.log(`Elements:`, listEl[1].children.length);

console.log(`Category:`, categoryEl[2].textContent);

console.log(`Elements:`, listEl[2].children.length);
