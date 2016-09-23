$('.intro-content').click(function() {
    $('.middle-block').animate({
        top: '-60%',
    }, 600);
});

$('.back').click(function() {
    $('.middle-block').animate({
        top: '50%',
    }, 800);
});