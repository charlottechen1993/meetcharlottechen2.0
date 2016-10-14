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

// -------------------
// ABOUT PAGE SHIFTING
// -------------------

var activeLiId = 'introduction-li'; // global var tracking current active tab
$(".about-li").click(function(){
    var newSectionLi = $(this).attr('id');
    var newSection = newSectionLi.replace('li', 'section');
    
    // if clicked li isn't current active section
    if ($(this).hasClass('active-li')==false){
        //remove old active li's css
        var oldActiveSection = activeLiId.replace('li', 'section');
        $('#' + activeLiId).css({'font-weight': 'normal', 'color':'black'});
        $('#' + activeLiId).removeClass('active-li');
        // set old active section to inactive and invisible 
        $('#' + oldActiveSection).removeClass('active-section');
        $('#' + oldActiveSection).css("display", "none");
        
        // set new active section's li to active
        activeLiId = newSectionLi;
        $('#' + newSectionLi).removeAttr('style');
        $(this).addClass("active-li");
        
        // set new active section to be active and visible
        $('#' + newSection).removeAttr('style');
        $('#' + newSection).addClass('active-section');
    }
});
    