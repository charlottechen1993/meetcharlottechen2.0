// --------------------------------
// ABOUT PAGE SHIFTING (via Scroll)
// --------------------------------
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((( elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)));
}

// display skills capability bar chart when scrolled in view
// only when on about page
$(".nav-square-white").click(function(){
    $(window).scroll(function(){
        var inView = isScrolledIntoView('#skills-section');
        if(inView == true){
            $('#bar-chart').removeAttr('style');
            $('#bar-chart').css('display', 'block');
        }
    });
});

$(".nav-square-blue").click(function(){

});

// return to homepage
$('.back').click(function() {
    $('.middle-block').delay(500).animate({
        top: '50%'
    }, 1200, 'easeOutBack');
    $(".profile").show();
    $(".KW_progressContainer").css("display", "none");
});

// -------------------
// PORTFOLIO PAGE LOAD
// -------------------
// initialize Isotope after all images have been loaded.
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

$(document).ready(function(){
    $(".grid-item").mouseenter(function(){
        $(this).children(".project-name").fadeIn();
        $(this).children(".project-area").fadeIn();
    });
    $(".grid-item").mouseleave(function(){
        $(this).children(".project-name").fadeOut();
        $(this).children(".project-area").fadeOut();
    });
});

// Progress menu bar scroll animation
$(window).load(function () {
    var arr=[1,2,3,4,5,6,7,8,9,10,11,12]
    $(window).scroll(function () {
        var wintop = $(window).scrollTop()
            , docheight = $('.page-left').height()
            , winheight = $(window).height();
        var totalScroll = ((wintop / (docheight - winheight)) * 100);
        var cur = (totalScroll/8.3333).toFixed(0);
        
        $.each(arr,function(index, value){
            if(cur>=value){
                $("#dot-"+value).css("background-color", "#c6ac73");
            } else {
                $("#dot-"+value).css("background-color", "rgba(0,0,0,0)");
            }
        });
    });
});