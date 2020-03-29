// DOM Elements
const navSymbol = document.querySelector('#nav-symbol');

// Slide nav on and off screen
navSymbol.addEventListener('click', e => {
    if (navSymbol.previousSibling.className === 'slide-right') {
        navSymbol.previousSibling.classList.remove('slide-right');
        navSymbol.previousSibling.classList.add('slide-left');
    } else if (navSymbol.previousSibling.className === 'slide-left') {
        navSymbol.previousSibling.classList.remove('slide-left');
        navSymbol.previousSibling.classList.add('slide-right');
    }
});

