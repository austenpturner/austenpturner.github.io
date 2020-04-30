// DOM Elements
const navSymbol = document.querySelector('#nav-symbol');
const navLinks = document.querySelector('#nav-links');

// Slide nav on and off screen when user clicks nav symbol
navSymbol.addEventListener('click', () => {
        if (navLinks.className === 'slide-right') {
        navLinks.classList.remove('slide-right');
        navLinks.classList.add('slide-left');
    } else if (navLinks.className === 'slide-left') {
        navLinks.classList.remove('slide-left');
        navLinks.classList.add('slide-right');
    }
    navSymbol.classList.toggle('toggle');
});

// Slide nav off screen when user clicks nav item
navLinks.addEventListener('click', e => {
    if (e.target.className === 'nav-link') {
        navLinks.classList.remove('slide-left');
        navLinks.classList.add('slide-right');
    }
    navSymbol.classList.toggle('toggle');
});

AOS.init({
    duration: 1000
});

