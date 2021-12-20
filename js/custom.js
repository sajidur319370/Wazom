$(function() {
    // banner slider
    $('.banner-content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });

    // service slider
    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    });


    $('.blog-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: false,
        prevArrow: '.right',
        nextArrow: '.left',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]

    });

    $('.brand-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        centerPadding: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                }
            },


        ]

    });


});

// project

$('.venobox').venobox();

// mixitup
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl);

$('.counter').counterUp({
    delay: 10,
    time: 1000
});