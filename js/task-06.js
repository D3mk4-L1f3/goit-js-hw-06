const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur',currentInput);

function currentInput() {
    const strictLength = parseInt(inputElement.getAttribute('data-length'));

    const currentLength = inputElement.value.length;

    const isValid = currentLength === strictLength;
    
    checkInputCurrent(isValid);
}

function checkInputCurrent(isValid) {

    inputElement.classList.remove('valid', 'invalid');

    inputElement.classList.add(isValid
        ? 'valid'
        : 'invalid');
}
