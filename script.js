// DOM Elements
const navSymbol = $('#nav-symbol');

navSymbol.click(function() {
    if ($(this).prev().hasClass('')) {
        $(this).prev().addClass('slide-left');
        console.log($(this).prev());
    } else if ($(this).prev().hasClass('slide-left')) {
        $(this).prev().removeClass('slide-left');
        console.log($(this).prev());
    }
})