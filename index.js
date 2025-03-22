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

document.addEventListener('DOMContentLoaded', () => init());