$('.intro-content').click(function() {
    $('.middle-block').animate({
        top: '-100%',
    }, 600);
});

$('.back').click(function() {
    $('.middle-block').animate({
        top: '50%',
    }, 800);
});


//initialize Isotope after all images have been loaded.
var $grid = $('.grid').imagesLoaded(
    function(){
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        
        $('.portfolio-menu').on('click', 'li', function() {         
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: '.'+filterValue });
        });
    }); 
