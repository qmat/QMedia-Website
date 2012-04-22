/* Author:*/


$('.tooltip').tooltipsy({
    offset: [0, 0],
    show: function (e, $el) {
        $el.css({
            'left': parseInt($el[0].style.left.replace(/[a-z]/g, '')) - 30 + 'px',
            'opacity': '0.0',
            'display': 'block'
        }).animate({
            'left': parseInt($el[0].style.left.replace(/[a-z]/g, '')) + 30 + 'px',
            'opacity': '1.0'
        }, 100);
    },
    hide: function (e, $el) {
        $el.slideUp(100);
    }
});