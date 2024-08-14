$(document).ready(function() {
    function checkVisibility() {

        $('.section_about-wrapper--content_tape-image--wrapper_content').each(function() {
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
});