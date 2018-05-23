// once full website is loaded remove preolaoder
$(window).on("load", function() {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut();
});