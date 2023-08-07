(function($) {
    "use strict";

    // mobile menu
    // Mobile Menu
    $("#menu-active").on("click", function(event) {
        event.stopPropagation();
        $(".mobile_menus").slideToggle();
    });
    $(".has-menu").on("click", function(event) {
        event.stopPropagation();
        $(".sub-menu").slideToggle();
    }); 
    // Add click event listener to the body
    $("body").on("click", function(event) {
        if (!$(event.target).closest(".mobile_menus, #menu-active").length) {
            $(".mobile_menus").slideUp();
        }
    });


    // select beautiy
    $('select').niceSelect();

    

})($);