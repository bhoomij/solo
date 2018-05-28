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

/* ================================================
                    Responsive Tabs
=================================================== */
$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
})

/* ================================================
                    Portfolio
=================================================== */
$(window).on("load", function() {
    // initailize isotope
    $("#isotope-container").isotope({});
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function() {
        // get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
});

/* ================================================
                Magnigic popup
=================================================== */
$(function() {
    $('.portfolio-item').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },
    });
});

/* ================================================
                    Testimonials
=================================================== */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});

/* ================================================
                        Stats
=================================================== */
$('.counter').counterUp({
    delay: 10,
    time: 1000, 
});

/* ================================================
                        Clients
=================================================== */
$(function () {
    $("#client-list").owlCarousel({
        items: 6,
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
                    Google Maps
=================================================== */
$(window).on('load', function() {
    // The location
    var location = {lat: 40.941587, lng: -73.895176};
    var addressString = "203 Broadway, Yonkers, NY, USA";
    
    // The map, centered at location
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: location});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: location, map: map, title: "Click To See Address"}); 
    
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    
     marker.addListener('click', function() {
        infowindow.open(map, marker);
     });

});











