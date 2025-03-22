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

const getNewColor = () => `#${Math.floor(Math.random() * 16777215).toString()}`; //largest hex value (#FFFFFF) - 16777215

document.addEventListener('DOMContentLoaded', () => init());