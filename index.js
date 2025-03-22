let colorPaletteArr = [];

const init = () => {
    //event listeners
    document.body.addEventListener('click', e => handleClick(e.target));
    document.body.addEventListener('keyup', e => handleKeyup(e.code));

    const handleClick = target => {
        if (target.id === 'generate-palette-btn') {
            generatePaletteBtnClick();
        }
        else if (target.classList.contains('color-palette') || target.parentElement.classList.contains('color-palette')) {
            util.copyToClipboard(target.classList.contains('color-palette') ? target.id : target.parentElement.id);
        }
    }

    const handleKeyup = key => {
        if (key === 'Space') {
            generatePaletteBtnClick();
        }
        else if (key === 'KeyC') {
            util.copyToClipboard(colorPaletteArr);
        }
    }
}

const generatePaletteBtnClick = () => {
    const paletteIcon = document.getElementById('palette-icon');
    const colorPaletteContainer = document.getElementById('color-palette-container');
    if (paletteIcon) {
        paletteIcon.style.display = 'none';
    }
    colorPaletteContainer.style.display = 'grid';
    generatePalette();
}

const generatePalette = () => {
    colorPaletteArr = [];
    const colorEleList = document.querySelectorAll('.color');
    const hexValueEleList = document.querySelectorAll('.hex-value');
    for (let i = 0; i < 5; i++) {
        let color = util.getNewColor();
        if (colorPaletteArr.includes(color)) color = util.getNewColor();
        colorPaletteArr.push(color);
        colorEleList[i].style.backgroundColor = color;
        colorEleList[i].parentElement.id = color;
        hexValueEleList[i].textContent = color;
    }
}

const util = {
    getNewColor: () => `#${Math.floor(Math.random() * 16777215).toString().slice(0, 6)}`, //largest hex value (#FFFFFF) - 16777215
    copyToClipboard: hexcode => window.navigator.clipboard.writeText(hexcode).then(() => util.showToast(hexcode)),
    showToast: hexcode => {
        const toast = util.createToast(`Hexcode ${hexcode} copied to clipboard`);
        const toastContainer = document.getElementById('toast-container');
        toastContainer.append(toast);
        toastContainer.style.display = 'flex';
        setTimeout(() => toast.style.display = 'none', 2000);
    },
    createToast: message => {
        const toast = document.createElement('div');
        const i = document.createElement('i');
        const span = document.createElement('span');
        toast.id = 'toast';
        i.classList.add('fa-solid', 'fa-circle-check');
        span.textContent = message;
        toast.append(i, span);
        return toast;
    }
}

document.addEventListener('DOMContentLoaded', () => init());