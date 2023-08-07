const fontChanging = document.getElementById('font-size-control');
const textElement = document.getElementById('text');


function changeFontSize() {
    const fontSize = fontChanging.value + 'px';
    textElement.style.fontSize = fontSize;
}
        
fontChanging.addEventListener('input', changeFontSize);

changeFontSize();