// DOM Elements
const navSymbol = document.querySelector('#nav-symbol');

// Slide nav on and off screen
navSymbol.addEventListener('click', () => {
    console.log(navSymbol.previousElementSibling.className);
    if (navSymbol.previousElementSibling.className === 'slide-right') {
        navSymbol.previousElementSibling.classList.remove('slide-right');
        navSymbol.previousElementSibling.classList.add('slide-left');
    } else if (navSymbol.previousElementSibling.className === 'slide-left') {
        navSymbol.previousElementSibling.classList.remove('slide-left');
        navSymbol.previousElementSibling.classList.add('slide-right');
    }
});

