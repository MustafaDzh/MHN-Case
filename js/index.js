$(document).ready(function () {
    function checkVisibility() {

        $('.section_about-wrapper--content_tape-content--image').each(function () {
            var $this = $(this);
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementTop = $this.offset().top;
            var elementBottom = elementTop + $this.outerHeight();

            if (elementBottom > scrollTop && elementTop < scrollTop + windowHeight) {
                setTimeout(function () {
                    $this.find('img').addClass('animate');
                });
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();

    var tapeSwiper = new Swiper('.tape-hero', {
        loop: true,
        spaceBetween: 70,
        slidesPerView: 'auto',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        breakpoints: {
            480: {
                spaceBetween: 32
            },
        }
    });

    var fontsSwiper = new Swiper('.tape-fonts', {
        spaceBetween: 32,
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
    });

    var recipesSwiper = new Swiper('.tape-recipes', {
        spaceBetween: 32,
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
    });
    var swiper = new Swiper('.firstSwiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.right-button--first',
            prevEl: '.left-button--first'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
            dynamicBullets: true,
        },
        breakpoints: {
            1440: {
                spaceBetween: 32
            },
            1024: {
                spaceBetween: 30
            },
            768: {
                spaceBetween: 20
            },
            480: {
                spaceBetween: 10
            }
        }
    });

    var newSwiper = new Swiper('.secondSwiper', {
        spaceBetween: 32,
        loop: false,
        slidesPerView: 'auto',
        direction: 'horizontal',
        initialSlide: (function () {
            var totalSlides = document.querySelectorAll('.secondSwiper .swiper-slide').length;
            return totalSlides - 1;
        })(),
        speed: 800,
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
            reverseDirection: true, 
        },
        navigation: {
            nextEl: '.right-button--second',
            prevEl: '.left-button--second'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
            dynamicBullets: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 20
            },
            480: {
                spaceBetween: 10
            }
        },
    });

    $('.left-button-first').on('click', function() {
        swiper.slidePrev(); 
    });
    
    $('.right-button-first').on('click', function() {
        swiper.slideNext(); 
    });
    
    $('.left-button-second').on('click', function() {
        newSwiper.slidePrev(); 
    });
    
    $('.right-button-second').on('click', function() {
        newSwiper.slideNext(); 
    });

    $('.card-image').each(function () {
        var $contentOn = $(this).find('.card-image--content_on');

        if ($contentOn.find('img').length === 0) {
            $(this).addClass('no-overlay-image');
        } else {
            $(this).removeClass('no-overlay-image');
        }
    });

    var $sections = $('#section_about, #section_overview, #section_design, #section_sitemap, #section_desktop, #section_mobile, #section_highlights');
    var $navLinks = $('.miniNav--nav_content-stage a');

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();

        $sections.each(function () {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                var id = $(this).attr('id');
                var $currentLink = $navLinks.filter('[href="#' + id + '"]');

                $navLinks.removeClass('active');
                $currentLink.addClass('active');
            }
        });
    });
});