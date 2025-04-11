$(".testimonial-wrapper").owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        991: {
            items: 1,
        },
        1300: {
            items: 1,
        },
    },
});
$(".media-wrapper").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        450: {
            items: 2,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4,
        },
    },
});
$(".partnership-wrapper").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        450: {
            items: 2,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4,
        },
        1300: {
            items: 5,
        },
    },
});

if (jQuery('#testimonial').length) {
    jQuery('#testimonial').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dotsEach: false,
        autoplayTimeout: 3000,
        autoplay: true,
        responsive: {
            0: {
                margin: 20,
                items: 1
            },
            768: {
                items: 2.3
            },
            1200: {
                items: 2.5
            },
            1800: {
                items: 3.5
            }
        }
    });
}
if (jQuery('#integration-slider').length) {
    jQuery('#integration-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dotsEach: false,
        autoplayTimeout: 3000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            },
            1800: {
                items: 4
            }
        }
    });
}

$(document).ready(function () {
    $(window).resize(function () {
        $(".toogle-btn").removeClass("active");
        $("body").removeClass("active");
        $(".main-menu").removeClass("active");
        $(".manu-link").removeClass("active");
    });

    $(".toogle-btn").click(function () {
        $(".toogle-btn").toggleClass("active");
        $(".main-menu").toggleClass("active");
        $("body").toggleClass("active");
    });

    $(".main-menu li ul li a").click(function () {
        $(".toogle-btn").removeClass("active");
        $("body").removeClass("active");
        $(".main-menu").removeClass("active");
    });

    $(".main-menu .manu-link").removeClass("active");

    $(".main-menu .manu-link").click(function (e) {
        e.stopPropagation(); // Prevent click event from bubbling to document

        // Toggle 'active' class for the clicked manu-link
        $(this).toggleClass("active");

        // Close other open submenus
        $(".manu-link").not(this).removeClass("active");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".main-menu").length) {
            $(".manu-link").removeClass("active");
        }
        if (window.innerWidth < 1024) {
            if (!$(event.target).closest(".manu-link").length) {
                $(".manu-link").removeClass("active");
            }
        }
    });
});


// $( document ).ready(function() {

//   $('.hamburger-menu').click(function (){
//       $('.navbar-menu').addClass('active');
//   })
//   $('.navbar-cross').click(function (){
//       $('.navbar-menu').removeClass('active');
//   })

//   $('.menu li a').click(function (){
//       $(this).parent().find('.sub-menu').toggleClass('active');
//       $(this).toggleClass('active');
//   })

//   $('.sub-menu').parent().find('a').addClass('arrow');

// });
$(".price-toggle").click(function () {
    if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $("#individual-tab").addClass("show active");
        $("#enterprise-tab").removeClass("show active");
        $("#nav-profile-tab").removeClass("active");
        $("#nav-home-tab").addClass("active");
    } else {
        $(this).removeClass("active");
        $("#enterprise-tab").addClass("show active");
        $("#individual-tab").removeClass("show active");

        $("#nav-home-tab").removeClass("active");
        $("#nav-profile-tab").addClass("active");
    }
});
$("#nav-profile-tab").click(function () {
    $(".price-toggle").removeClass("active");
});
$("#nav-home-tab").click(function () {
    $(".price-toggle").addClass("active");
});


// ************************************* Dropdown *************************************

$('.select-dropdown__button').on('click', function () {
    // Close any other open dropdowns
    $('.select-dropdown__list').not($(this).next()).removeClass('active');

    // Toggle the active class on the clicked dropdown
    $(this).next('.select-dropdown__list').toggleClass('active');
});

$('.select-dropdown__list-item').on('click', function () {
    var itemValue = $(this).data('value');
    console.log(itemValue);

    // Get the selected item's HTML content (including the icon and text)
    var selectedItemHTML = $(this).html();

    // Update the button content with the selected item's HTML and set the data-value
    $(this)
        .closest('.select-dropdown')
        .find('.select-dropdown__button span')
        .html(selectedItemHTML)
        .parent()
        .attr('data-value', itemValue);

    // Close the dropdown
    $(this).closest('.select-dropdown__list').toggleClass('active');
});



$('#banner-video-modal').on('hidden.bs.modal', function () {
    $(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
});



const header = $('#header'); // Replace 'header' with your header selector
if ($(window).scrollTop() > 50) {
    header.addClass('sticky');
}
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        header.addClass('sticky');
    } else {
        header.removeClass('sticky');
    }
});


$(".hamburger-menu img").click(function () {
    $(".navbar-menu").addClass("active");
    $(".header-layer").addClass("active");
});

$(".header-layer").click(function () {
    $(".navbar-menu").removeClass("active");
    $(".header-layer").removeClass("active");
});

$(".submenu li").click(function () {
    $(".navbar-menu").removeClass("active");
    $(".header-layer").removeClass("active");
});
