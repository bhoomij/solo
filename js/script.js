/* ================================================
                    Preloader
=================================================== */

// once full website is loaded remove preolaoder
$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

/* ================================================
                    Team
=================================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});

/* ================================================
                    Progress Bars
=================================================== */
$(function(){    
     $("#progress-elements").waypoint(function() {
            $(".progress-bar").each(function() {
                $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
                }, 1000);
                $(".progress-bar span").css('display', 'block');
            });
            this.destroy();
        }, {
         offset: 'bottom-in-view'
     });
});