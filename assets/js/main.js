(function($) {
    "use strict";

    $(document).ready(function() {


        // mobile menu
        $("#menu-active").on("click", function(event) {
            event.stopPropagation();
            $(".mobile_menus").slideToggle();
        });
        $(".has-menu").on("click", function(event) {
            event.stopPropagation();
            $(".sub-menu").slideToggle();
        }); 
        $("body").on("click", function(event) {
            if (!$(event.target).closest(".mobile_menus, #menu-active").length) {
                $(".mobile_menus").slideUp();
            }
        });

        // select beautiy
        $('select').niceSelect();

        // Mobile packages slider
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
        
            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            },
        }); 

        
        // tab js
        $('.tab-header').click(function() {
            const tabId = $(this).data('tab');
            $('.tab-header').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').removeClass('active-tab').hide();
            $('#' + tabId).addClass('active-tab').show();
          });
          $('.tab-header[data-tab="tab1"]').click();
        
      });




    

})($);