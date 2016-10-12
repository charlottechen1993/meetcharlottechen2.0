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
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-sizer',
            }
        });
        
        // filter based on project category
        $('.portfolio-menu').on('click', 'li', function() {         
            var filterValue = $(this).attr('data-filter');
            if(filterValue == 'All')
                $grid.isotope({ filter: '*'});
            else
                $grid.isotope({ filter: '.'+filterValue });
        });
    }); 
