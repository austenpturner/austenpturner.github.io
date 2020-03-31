// DOM Elements
const navSymbol = document.querySelector('#nav-symbol');
const navLinks = document.querySelector('#nav-links');

// Slide nav on and off screen when user clicks nav symbol
navSymbol.addEventListener('click', () => {
    if (navSymbol.previousElementSibling.className === 'slide-right') {
        navSymbol.previousElementSibling.classList.remove('slide-right');
        navSymbol.previousElementSibling.classList.add('slide-left');
    } else if (navSymbol.previousElementSibling.className === 'slide-left') {
        navSymbol.previousElementSibling.classList.remove('slide-left');
        navSymbol.previousElementSibling.classList.add('slide-right');
    }
});

// Slide nav off screen when user clicks nav item
navLinks.addEventListener('click', e => {
    if (e.target.className === 'nav-link') {
        navSymbol.previousElementSibling.classList.remove('slide-left');
        navSymbol.previousElementSibling.classList.add('slide-right');
    }
});

