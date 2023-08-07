const categoriesEl = document.querySelectorAll('ul#categories > li.item');

console.dir(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
    
    const subSecondHeader = category.querySelector('h2').textContent;

    const subItemCount = category.querySelectorAll('ul > li').length;

    console.dir(`Category: ${subSecondHeader}`);
    console.dir(`Elements: ${subItemCount}`);
})




