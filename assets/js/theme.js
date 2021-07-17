/*------------------------------
For Mega menu and Mobile menu
--------------------------------*/
(function($){
	"use strict";
	var StorX = {};

    /* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */
    StorX.preloader = function(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
				
				//setTimeout(StorX.getStats , 1000)

            })   
        }
    }
	
	
    /* ---------------------------------------------- /*
	 * Stats Counter
	/* ---------------------------------------------- */	
	StorX.getStats = function(){
		fetch("https://farmerapi.storx.io/get-stats").then(x=>x.json()).then(({data}) => {
			const {staked_amount, stakeholder_count, user_count} = data;
			const staked_amount_eth = staked_amount / 10**18;
			console.log("staked_amount, stakeholder_count, user_count", staked_amount_eth, stakeholder_count, user_count);
			document.getElementById("totalUsers").innerHTML=`${user_count}`;
			document.getElementById("storageNodes").innerText=stakeholder_count;
			document.getElementById("srxStaked").innerText=staked_amount_eth;

			$('.counter').counterUp({
				delay: 10,
				time: 1000,
			});

			function numberWithCommas(x) {
				return x.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
			}
			$('.counter').each(function(){
				var v_pound = $(this).html();
				v_pound = numberWithCommas(v_pound);
			$(this).html(v_pound)
			})
			
			// $("#totalUsers").text(`${user_count}`)
		}).catch(console.error)
		// $.ajax("https://farmerapi.storx.io/get-stats", {
		// 	success:x => con
		// })	
	}
	

	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	StorX.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');		   
		   $(".top-header-area").css("display", "none");
	    }
	    else {
	       $('header').removeClass('fixed-header');
		   $(".top-header-area").css("display", "block");
	    }
	}


	/* ---------------------------------------------- /*
	 * Menu Close
	/* ---------------------------------------------- */
    StorX.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }	
	
	
	/* ---------------------------------------------- /*
	 * Menu Color change
	/* ---------------------------------------------- */
	StorX.MenuColorChange = function() {
		$(".navbar-toggler").click(function(){
    		$(".header-nav").toggleClass("menuColorChange");
		});
	}
	
	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */
	StorX.MegaMenu = function() {
		var mDropdown = $(".m-dropdown-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}
	
	
	/* ---------------------------------------------- /*
	 * One Page
	/* ---------------------------------------------- */
    StorX.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), footer a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 85,
                      }, 1000);
                      return false;
                  }
            }
        });
    }
	
	
	/* ---------------------------------------------- /*
	 * Magnificpopup
	/* ---------------------------------------------- */
    StorX.magnificPopup = function() {
        if ($('.popup-youtube, .open-popup-form, .partner_img').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                //disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
				 
				callbacks: {
					beforeOpen: function() {
						$('body').addClass('mfp-active');
					},
					beforeClose: function() {
						$('body').removeClass('mfp-active');
					}
				}
				 
            });
			
			// Content popups
			$('.open-popup-form').magnificPopup({
				type: 'inline',
				midClick: true,
				mainClass: 'mfp-fade',
				
				callbacks: {
					beforeOpen: function() {
						$('body').addClass('mfp-active');
					},
					beforeClose: function() {
						$('body').removeClass('mfp-active');
					}
				}
				
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
	
	
	/* ---------------------------------------------- /*
	 * Slider
	/* ---------------------------------------------- */
    StorX.sliderArea = function(){
        if ( $('.testimonial_slid').length ){ 
            $('.testimonial_slid').owlCarousel({
				loop: true,
            	margin: 30,
            	nav: true,
				dots: true,
            	responsive: {
            		0: {
            			items: 1
            		}, 
            		767: {
            			items: 2
            		},
					991: {
            			items: 3
            		}
            	}
            })
        };
    };
	
	
	
	
	/* ---------------------------------------------- /*
	 * Client Logo Slider
	/* ---------------------------------------------- */
    StorX.clSlide = function(){
        if ( $('.cl_slide').length ){ 
            $('.cl_slide').owlCarousel({				
				nav: false,
				loop: true,
				margin: 60,
				dots: false,
				autoplay: true,
				autoplaySpeed: 1200,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				
            	responsive: {
            		0: {
            			items: 2, 
            		}, 
            		575: {
            			items: 2, 
						margin: 30,
            		}, 
            		767: {
            			items: 3, 
						margin: 30,
            		}, 
            		991: {
            			items: 4
            		},
            		1199: {
            			items: 5
            		}
            	}
            })
        };
    };
	
	
	/* ---------------------------------------------- /*
	 * Scroll to top
	/* ---------------------------------------------- */
    StorX.scrollToTop = function(){
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                //if ($(this).scrollTop() > 400) {
                    //$('.scroll-top').fadeIn();
                //} else {
                    //$('.scroll-top').fadeOut();
                //}
				if ($(this).scrollTop() > 400) {
				  $('.scroll-top').addClass('show');
				} else {
				  $('.scroll-top').removeClass('show');
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
	
	
	// Document on Ready
	$(document).on("ready", function(){		
		StorX.preloader(),
		StorX.getStats(),
		StorX.HeaderFixd(),
		StorX.MenuClose(),
		StorX.MegaMenu(),
		StorX.MenuColorChange(),
		StorX.OnePage(),
		StorX.magnificPopup(),
		StorX.sliderArea(),
		StorX.clSlide(),
		StorX.scrollToTop()
	});

	// Document on Scroll
	$(window).on("scroll", function(){
		StorX.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
	});

})(jQuery);