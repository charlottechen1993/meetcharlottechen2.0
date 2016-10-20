// -------------------------------
// HOMEPAGE MIDDLE BLOCK ANIMATION
// -------------------------------
// load content page
$('.intro-content').click(function() {
    $('.middle-block').animate({
        top: '-100%',
        easing: 'swing',
    }, 800);
});

$(".intro-content-right").click(function(){
    setTimeout(function(){
        $("#about-menu").show();
    }, 1000);
});


// return to homepage
$('.back').click(function() {
    $('.middle-block').animate({
        top: '50%',
        easing: 'swing',
    }, 1000);
    $("#about-menu").hide();
});

// -------------------
// PORTFOLIO PAGE LOAD
// -------------------
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
var activeLiId = 'intro-bubble'; // global var tracking current active tab
$(".menu-bubble").click(function(){
    var newSectionBubbleId = $(this).attr('id');
    var newSection = newSectionBubbleId.replace('bubble', 'section');
    
    // scroll selected div into view
    $('html, body').animate({
        scrollTop: $("#" + newSection).offset().top
    }, 500);
    
    if($(this).attr('id')=='skills-bubble'){
        $('#bar-chart').removeAttr('style');
        $('#bar-chart').css('display', 'block');
    }
        
    // if clicked li isn't current active section
    if ($(this).hasClass('active-bubble')==false){
        //remove old active li's css
        var oldActiveSection = activeLiId.replace('bubble', 'section');
        $('#' + activeLiId).removeClass('active-bubble');
        // set old active section to inactive and invisible 
        $('#' + oldActiveSection).removeClass('active-section');
        // set new active section's li to active
        activeLiId = newSectionBubbleId;
        $(this).addClass("active-bubble");
        // set new active section to be active and visible
        $('#' + newSection).addClass('active-section');
    }
});

// ---------------------------
// Introduction Load Animation
// ---------------------------
$("#introduction-li").click(function(){
    $("#about-propic").animate({
        left: ["0", 'easeInOutBack'],
        duration: 'slow',
    }, 1200);
    $("#brief-info-block").delay(100).animate({
        right:0, 
        easing: 'easeInOutBack',
        duration: 'slow',
    }, 1000);
});

// -----------------------
// Ripple-effect animation
// -----------------------
(function($) {
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    })
})(jQuery);