! function ($) {
  "use strict";

  var SRXMaster = function () {};

  SRXMaster.prototype.initStickyMenu = function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
          $(".sticky").addClass("nav-sticky");
        } else {
          $(".sticky").removeClass("nav-sticky");
        }
      });
    },

    SRXMaster.prototype.initSmoothLink = function () {
      $('.navbar-nav a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    },

    SRXMaster.prototype.initScrollspy = function () {
      $("#navbarCollapse").scrollspy({
        offset: 50
      });
    },

    //tab selection with a dropdown list for small devices
    SRXMaster.prototype.initTabselector = function () {
      $('#tab_selector').on('change', function (e) {
        $('.form-tabs li a').eq($(this).val()).tab('show');
      });
    },

    //tab selection with a dropdown list for small devices
    SRXMaster.prototype.initStacktable = function () {
      $(document).ready(function () {
        $('.table-responsive-stack').find("th").each(function (i) {
          $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ':</span> ');
          $('.table-responsive-stack-thead').hide();
        });

        $('.table-responsive-stack').each(function () {
          var thCount = $(this).find("th").length;
          var rowGrow = 100 / thCount + '%';
          console.log(rowGrow);
          $(this).find("th, td").css('flex-basis', rowGrow);
        });

        function flexTable() {
          if ($(window).width() < 768) {
            $(".table-responsive-stack").each(function (i) {
              $(this).find(".table-responsive-stack-thead").show();
              $(this).find('thead').hide();
            });
            // window is less than 768px   
          } else {
            $(".table-responsive-stack").each(function (i) {
              $(this).find(".table-responsive-stack-thead").hide();
              $(this).find('thead').show();
            });
          }
          // flextable   
        }
        flexTable();
        window.onresize = function (event) {
          flexTable();
        };
        // document ready  
      });
    },
	
    SRXMaster.prototype.initBacktoTop = function() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },
	
	
	SRXMaster.prototype.initDropdown = function() {
	    function navControl(){
        if($(window).width() < 992){
            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#navbarSupportedContent").hasClass("show");
                if (_opened === true && !(clickover.is('.dropdown, .dropdown *'))) {
                    $("button.nav-link").trigger('click');
                }
            });
            $('#navbarSupportedContent .dropdown>a').unbind('click');
            $('#navbarSupportedContent .dropdown>a').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('sm-shown').siblings('.dropdown-menu').slideToggle();
            });

            $('#navbarSupportedContent .dropdown a *').on('click', function (e) {
                e.stopPropagation();
            });
        } else {
            $('#navbarSupportedContent .dropdown-menu').css('display', 'block');
        }
    }
    navControl();
    $(window).on('resize orientationchange', function(){
        navControl();
    });
	},
	
	

    SRXMaster.prototype.initTrunc = function() {
        let length = 10,
			div = document.getElementById('trunc_owner');
		
		if (div) {
		  let trunc = div.innerHTML;
		  
		  if (trunc.length > length) {
			
			trunc = trunc.substring(0, length),
			  trunc.replace(/\w+$/, '');
			
			trunc += '...';
			
			div.innerHTML = trunc;
		  }
		}
    },
	
	
	
	SRXMaster.prototype.initThemeSwitcher = function() {		
	var toggle = document.getElementById("theme-toggle");	
	var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: darkTheme)").matches ? "darkTheme" : "lightTheme");
	const htmlTag = document.getElementsByTagName('body')[0];
	if (storedTheme)
		htmlTag.setAttribute('class', storedTheme)	
	toggle.onclick = function() {
		var currentTheme = htmlTag.getAttribute('class', targetTheme);
		var targetTheme = "lightTheme";	
		if (currentTheme === "lightTheme") {
			targetTheme = "darkTheme";
		}	
		htmlTag.setAttribute('class', targetTheme)
		localStorage.setItem('theme', targetTheme);
	};	
	},
	





    SRXMaster.prototype.init = function () {
      this.initStickyMenu();
      this.initSmoothLink();
      this.initScrollspy();
      this.initTabselector();
      this.initStacktable();
      this.initBacktoTop();
	  this.initDropdown();
	  this.initTrunc();
	  this.initThemeSwitcher();
    },
    //init
    $.SRXMaster = new SRXMaster, $.SRXMaster.Constructor = SRXMaster
}(window.jQuery),

//initializing
function ($) {
  "use strict";
  $.SRXMaster.init();
}(window.jQuery);
