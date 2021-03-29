$(document).ready(function() {
    var $prev = $('.previousx');
    var $next = $('.nextx');
    var mode = "auto";

    // previous button
    $prev.on({
        click: function(e) {
            e.preventDefault();
            mode = "manual";
            showPreviousImage();
        }
    });

    // next button
    $next.on({
        click: function(e) {
            e.preventDefault();
            mode = "manual";
            showNextImage();

        }
    });

    // slides all images when the mode is auto which is default
    setInterval(function() {
        if (mode === "auto") {
            showNextImage();
        }
    }, 5000);

    function showNextImage() {
        var $actEl = $('.activx');
        var $nextEl = $actEl.next('.slidex');
        if ($nextEl.length) {
            $actEl.removeClass('activx');
            $nextEl.addClass('activx');
        } else {
            $actEl.removeClass('activx');
            $('.slidex:first-child').addClass('activx');
        }
    }

    function showPreviousImage() {
        var $actEl = $('.activx');
        var $prevEl = $actEl.prev('.slidex');
        if ($prevEl.length) {
            $actEl.removeClass('activx');
            $prevEl.addClass('activx');
        } else {
            $actEl.removeClass('activx');
            $('.slidex.last').addClass('activx');
        }
    }
});