let colorPaletteArr = [];

const init = () => {

}

const generatePaletteBtnClick = () => {
    const paletteIcon = document.getElementById('palette-icon');
    const colorPaletteContainer = document.getElementById('color-palette-container');
    if (paletteIcon) {
        paletteIcon.style.display = 'none';
    }
    colorPaletteContainer.style.display = 'grid';
}

const generatePalette = () => {
    const colorEleList = document.querySelectorAll('.color');
    const hexValueEleList = document.querySelectorAll('.hex-value');
    for (let i = 0; i < 5; i++) {
        let color = getNewColor();
        if (colorPaletteArr.includes(color)) color = getNewColor();
        colorPaletteArr.push(color);
        colorEleList[i].style.backgroundColor = color;
        hexValueEleList[i].textContent = color;
    }
}

const getNewColor = () => `#${Math.floor(Math.random() * 16777215).toString()}`; //largest hex value (#FFFFFF) - 16777215

document.addEventListener('DOMContentLoaded', () => init());