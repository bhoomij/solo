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
