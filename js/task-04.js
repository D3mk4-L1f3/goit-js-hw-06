const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.getElementById('value');


let counterValue = 0;


spanValue.textContent = counterValue;


function increment() {
    counterValue += 1
    spanValue.textContent = counterValue
};

function decrement() {
    counterValue -= 1
    spanValue.textContent = counterValue
};


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);   

