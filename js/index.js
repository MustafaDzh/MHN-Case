$(document).ready(function() {
    function checkVisibility() {
        var delay = 800; 

        $('.section_about-wrapper--content_tape-content--image').each(function() {
            var $this = $(this);
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementTop = $this.offset().top;
            var elementBottom = elementTop + $this.outerHeight();

            if (elementBottom > scrollTop && elementTop < scrollTop + windowHeight) {
                setTimeout(function() {
                    $this.find('img').addClass('animate');
                }, delay);
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();
});