// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


$(function() {
    // Call the Mobile Boilerplate helper.js functions
    MBP.scaleFix();
    MBP.hideUrlBarOnLoad();
    MBP.enableActive();
    MBP.preventZoom();
    
    // Toggle mobile header nav
    $('#menu-trigger').click(function () {
      $('.simple-header nav').toggleClass('show');
    });
});


// Place any Zepto/helper plugins in here.