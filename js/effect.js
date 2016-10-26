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
        $("#about-menu-2").show();
    }, 1000);
});

$(".intro-content-left").click(function(){
    setTimeout(function(){
        $("#port-menu").show();
        $("#port-menu-2").show();
    }, 1000);
});


// return to homepage
$('.back').click(function() {
    $('.middle-block').animate({
        top: '50%',
        easing: 'swing',
    }, 1000);
    $("#about-menu").hide();
    $("#about-menu-2").hide();
    $("#port-menu").hide();
    $("#port-menu-2").hide();
    $(".nav-square-white").css({"border-radius":"0", "height":"100px", "width":"100px"})
    $(".nav-square-blue").css({"border-radius":"0", "height":"100px", "width":"100px"})
    $(".fa-arrow-right").hide();
    $(".fa-arrow-left").hide();
    $(".square-content").show();
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
        $(".port-menu-bubble").click(function(){  
            var filterValue = $(this).attr('data-filter');
            if(filterValue == 'All')
                $grid.isotope({ filter: '*'});
            else
                $grid.isotope({ filter: '.'+filterValue });
        });
    }); 


// --------------------------------
// ABOUT PAGE SHIFTING (via Scroll)
// --------------------------------
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// display skills capability chart when scrolled in view
$(window).scroll(function(){
    var inView = isScrolledIntoView('#skills-section');
    if(inView == true){
        $('#bar-chart').removeAttr('style');
        $('#bar-chart').css('display', 'block');
    }
});

// --------------------------------
// ABOUT PAGE SHIFTING (via Click)
// --------------------------------
var activeSkillBtnId = 'capabilities-btn';
var activeLiId = 'intro-bubble'; // global var tracking current active tab
$(".menu-bubble").click(function(){
    var newSectionBubbleId = $(this).attr('id');
    var newSection = newSectionBubbleId.replace('bubble', 'section');
    
    // scroll selected div into view
    $('html, body').animate({
        scrollTop: $("#" + newSection).offset().top
    }, 500);
    
    
    if($(this).attr('id')=='skills-bubble'){
        var newSkillBtnId = $(this).attr('id');
        var newGraph = newSkillBtnId.replace('btn', 'graph');
        if($('#'+newGraph).hasClass('active-graph')==false){
            $('#'+newGraph).fadeIn( "slow", function() {});
        }
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

// -------------------------------------
// SKILLS BAR GRAPH SHIFTING (via Click)
// -------------------------------------
$('.skills-btn').click(function(){
    var newSkillBtnId = $(this).attr('id');
    var newGraph = newSkillBtnId.replace('btn', 'graph');
    
    if($(this).hasClass('active-skill-btn')==false){
        var oldGraph = activeSkillBtnId.replace('btn', 'graph');
        $('#' + activeSkillBtnId).removeClass('active-skill-btn');
        $('#' + oldGraph).removeClass('active-graph');
        $('#' + oldGraph).removeAttr('css');
        $('#' + oldGraph).fadeOut( "slow", function() {});
        
        activeSkillBtnId = newSkillBtnId;
        $(this).addClass("active-skill-btn");
        $('#' + newGraph).addClass('active-graph');
        $('#' + newGraph).fadeIn( "slow", function() {});
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