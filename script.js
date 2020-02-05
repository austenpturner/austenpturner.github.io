// DOM Elements
const navSymbol = $('#nav-symbol');

navSymbol.click(function() {
    if ($(this).prev().hasClass('slide-right')) {
        $(this).prev().removeClass('slide-right').addClass('slide-left');
    } else if ($(this).prev().hasClass('slide-left')) {
        $(this).prev().removeClass('slide-left').addClass('slide-right');
    }
})