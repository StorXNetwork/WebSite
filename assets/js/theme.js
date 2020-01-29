;(function($) {
    "use strict";	
    
    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
    
    // Preloader JS
    function preloader(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            })   
        }
    }
	
	//* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube, .open-popup-form, .partner_img').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });
			
			// Content popups
			$('.open-popup-form').magnificPopup({
				type: 'inline',
				midClick: true,
				mainClass: 'mfp-fade'
			});
			
			// Image popups
            $('.partner_img').magnificPopup({
                delegate: '.zoom_img',
                type: 'image',
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () { 
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
        };
    };  
	
    /*Function Calls*/ 
    new WOW().init();
	scrollToTop ();
	magnificPopup ();
	preloader ();
    
})(jQuery);





/*------------------------------
For Mega menu and Mobile menu
--------------------------------*/
(function($){
	"use strict";
	var storeX = {};

    /*--------------------
        * Menu Close
    ----------------------*/
    storeX.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	storeX.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    storeX.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 90,
                      }, 1000);
                      return false;
                  }
            }
        });
    }


	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */

	storeX.MegaMenu = function() {
		var mDropdown = $(".m-dropdown-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}
	
	// Document on Ready
	$(document).on("ready", function(){
		storeX.HeaderFixd(),
		storeX.OnePage(),
		storeX.MenuClose(),
		storeX.MegaMenu()		
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		storeX.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
	});


})(jQuery);