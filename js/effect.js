// load content page
$('.intro-content').click(function() {
    $('.middle-block').animate({
        top: '-100%',
    }, 600);
});

// return to homepage
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

// About pages load
$(".about-li").click(function(){
    var newSectionLi = $(this).attr('id');
    var newSection = newSectionLi.replace('li', 'section');
    
    // if clicked li isn't current active section
    if ($(this).hasClass('active-li')==false){
        //remove current active section view
        $("section").empty();
        //set new section's li to active
        $(this).addClass("active-li");
        alert($(this).attr('class'));
        $(this).css('font-weight', 'bold')
        $('#' + newSection).css("visibility", "visible");
    }
});
    