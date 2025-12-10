//jQuery to collapse the navbar on scroll
$(window).scroll(function() {

    w = $( window ).width();

    if ($(".navbar").offset().top > 50) {
        $(".navbar-ex1-collapse").addClass("top-nav-collapse");
        $(".navbar-right li").addClass("menu-li");
        $(".navbar-right li a").css({"padding-top":"10px", "min-height":"10px"});
        
        if(w > 746){
            $(".navbar-brand img").attr("src",'http://melatilaundry.com/assets/wsfront/img/small-logos.png');
            $(".navbar-brand img").css({"margin-top":"-11px"});
        }

    } else {
        $(".navbar-ex1-collapse").removeClass("top-nav-collapse");
        $(".navbar-right li").removeClass("menu-li");
        $(".navbar-right li a").css({"padding-top":"35px", "min-height":"100px"});
               
        $(".navbar-brand img").attr("src",'http://melatilaundry.com/assets/wsfront/img/logos.png');
        $(".navbar-brand img").css({"margin-top":"0"});
       

        
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //MAPS GOOGLE
    $('.maps-peta').click(function () {
        $('.maps-peta iframe').css("pointer-events", "auto");
    });
    
    $( ".maps-peta" ).mouseleave(function() {
      $('.maps-peta iframe').css("pointer-events", "none"); 
    });
});

