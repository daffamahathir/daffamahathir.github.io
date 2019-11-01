"use strict";

AOS.init();
/*Animate Hamburger*/
var click = false;
$(document).on('click', '.hamburger--3dx', function () {
    click = !click;
    if(click) {
        $(this).addClass('is-active');
        $("#dropDown").hide().animate({
            height: 'toggle'
        });
    }else {
        $(this).removeClass('is-active');
        $("#dropDown").show().animate({
            height: 'toggle'
        });
    }
});

/*Smooth page scroll*/
$(document).on('click', 'a[href*="#"]:not([href="#"])', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});