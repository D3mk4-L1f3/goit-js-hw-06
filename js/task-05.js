const nameInputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output");


function onOutputVisializationHandle() {

    const inputItem = nameInputEl.value;

    !(inputItem === '')
        ? nameOutputEl.textContent = inputItem
        : nameOutputEl.textContent = 'Anonymous'
};


nameInputEl.addEventListener('input', onOutputVisializationHandle);
    