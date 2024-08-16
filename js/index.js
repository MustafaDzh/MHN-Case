$(document).ready(function() {
    function checkVisibility() {

        $('.section_about-wrapper--content_tape-content--image_wrapper').each(function() {
            var $this = $(this);
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementTop = $this.offset().top;
            var elementBottom = elementTop + $this.outerHeight();

            if (elementBottom > scrollTop && elementTop < scrollTop + windowHeight) {
                setTimeout(function() {
                    $this.find('img').addClass('animate');
                });
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();

    var tapeSwiper = new Swiper('.tape-hero', {
        spaceBetween: 70,                      
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
            slidesPerView: 2.6,
            spaceBetween: 0,
            direction: 'horizontal',
        });

        var newSwiper = new Swiper('.secondSwiper', {
            loop: false,                          
            slidesPerView: 2.5,                  
            spaceBetween: 0,                      
            direction: 'horizontal',              
            initialSlide: (function() {
                var totalSlides = $('.secondSwiper .swiper-slide').length;
                return totalSlides - 1;           
            })(),
        });

        $('.card-image').each(function() {
            var $contentOn = $(this).find('.card-image--content_on');
            
            if ($contentOn.find('img').length === 0) {
                $(this).addClass('no-overlay-image');
            } else {
                $(this).removeClass('no-overlay-image');
            }
        });
        
});