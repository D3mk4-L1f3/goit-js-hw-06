const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const recipeList = document.getElementById('ingredients');

const partOfList = [];


ingredients.forEach((ingredient) => {

  const listItem = document.createElement('li');

  listItem.textContent = ingredient;
  
  listItem.classList.add('item');
  
  partOfList.push(listItem);
  
});


recipeList.append(...partOfList);