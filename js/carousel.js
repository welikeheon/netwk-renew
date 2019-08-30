$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        afterUpdate: function() {
            updateSize();
        },
        afterInit: function() {
            updateSize();
        },
        loop: false,
        margin: 0,
        center: true,
        nav: false,
        lazyLoad: true,
        items: 1,
    })

    function updateSize() {
        var minHeight = parseInt($('.owl-item').eq(0).css('height'));
        $('.owl-item').each(function() {
            var thisHeight = parseInt($(this).css('height'));
            minHeight = (minHeight <= thisHeight ? minHeight : thisHeight);
        });
        $('.owl-wrapper-outer').css('height', minHeight + 'px');
    }

});