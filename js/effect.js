$('.intro-content').click(function() {
    $('.middle-block').animate({
        top: '-60%',
    }, 700);
});

$('.back').click(function() {
    $('.middle-block').animate({
        top: '50%',
    }, 700);
});