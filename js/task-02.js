const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const recipeList = document.getElementById('ingredients');

const partOfList = document.createDocumentFragment();


ingredients.forEach((ingredient) => {

  const recipeItem = document.createElement('li');

  recipeItem.textContent = ingredient;

  recipeItem.classList.add('item');
  
  recipeList.appendChild(recipeItem)
});


recipeList.appendChild(partOfList);
