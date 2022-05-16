"use strict";

function absolute_pageResize () {
    var window_ht = jQuery(window).height();
    var header_ht = jQuery('.site-header5').outerHeight();
    var page_ht = window_ht - header_ht;
    jQuery('.page-full-height').css('height', page_ht + 'px')
}

jQuery(document).ready(function ($) {

    // Full Height - Pages
    if ($('.page-full-height').length > 0) {
        $(window).resize(function () {
            absolute_pageResize();
        });
        absolute_pageResize();
    }
    
    /*
     Single Property
     */
    // Slider
    if ($('#prop-slider').length) {
        var swiper = new Swiper('#prop-slider', {
            loop: true,
            autoHeight: true,
            grabCursor: true,
            nextButton: '#prop-slider .swiper-button-next',
            prevButton: '#prop-slider .swiper-button-prev',
            pagination: '#prop-slider .swiper-pagination',
            paginationType: 'fraction'
        });
    }

    if ($('.prop-slider-top').length) {
        var galleryTop = new Swiper('.prop-slider-top', {
            nextButton: '.prop-slider-top .swiper-button-next',
            prevButton: '.prop-slider-top .swiper-button-prev',
            pagination: '.prop-slider-top .swiper-pagination',
            paginationType: 'fraction',
            spaceBetween: 0,
            loop: true,
            loopedSlides: 5,
            autoHeight: true,
            grabCursor: true,
        });
        var galleryThumbs = new Swiper('.prop-slider-thumbs', {
            spaceBetween: 1,
            slidesPerView: 4,
            grabCursor: false,
            loop: true,
            loopedSlides: 5,
            slideToClickedSlide: true,
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }

    
    /*
     Single Blog Post
     */
    // Slider
    if ($('#post-slider').length) {
        var swiper = new Swiper('#post-slider', {
            loop: true,
            autoHeight: true,
            grabCursor: true,
            nextButton: '#post-slider .swiper-button-next',
            prevButton: '#post-slider .swiper-button-prev',
            pagination: '#post-slider .swiper-pagination',
            paginationType: 'fraction'
        });
    }


    // Popular Products Tabs
    $('.absolute-tabs li').on('click', 'a', function () {
        if ($(this).hasClass('active') || $(this).attr('data-absolutetab') == '')
            return false;
        $(this).parents('.absolute-tabs').find('li a').removeClass('active');
        $(this).addClass('active');

        // mobile
        $('.absolute-tab-mob[data-absolutetab-num=' + $(this).data('absolutetab-num') + ']').parents('.absolute-tab-cont').find('.absolute-tab-mob').removeClass('active');
        $('.absolute-tab-mob[data-absolutetab-num=' + $(this).data('absolutetab-num') + ']').addClass('active');

        $($(this).attr('data-absolutetab')).parents('.absolute-tab-cont').find('.absolute-tab').css('height', '0px');
        $($(this).attr('data-absolutetab')).css('height', 'auto').hide().fadeIn();
        return false;
    });

    // Popular Products Tabs (mobile)
    $('.absolute-tab-cont').on('click', '.absolute-tab-mob', function () {
        if ($(this).hasClass('active') || $(this).attr('data-absolutetab') == '')
            return false;
        $(this).parents('.absolute-tab-cont').find('.absolute-tab-mob').removeClass('active');
        $(this).addClass('active');

        // main
        $('.absolute-tabs li a[data-absolutetab-num=' + $(this).data('absolutetab-num') + ']').parents('.absolute-tabs').find('li a').removeClass('active');
        $('.absolute-tabs li a[data-absolutetab-num=' + $(this).data('absolutetab-num') + ']').addClass('active');

        $($(this).attr('data-absolutetab')).parents('.absolute-tab-cont').find('.absolute-tab').animate({
            'height': '0px'
        }, 350);
        $($(this).attr('data-absolutetab')).animate({
            'height': $($(this).attr('data-absolutetab')).find('.absolute-tab-inner').outerHeight()+'px'
        }, 350);

        return false;
    });

    // Accordions
    $('.accordion-tab-cont').on('click', '.accordion-tab-mob', function () {
        if ($(this).hasClass('active') || $(this).attr('data-accordion') == '')
            return false;
        $(this).parents('.accordion-tab-cont').find('.accordion-tab-mob').removeClass('active');
        $(this).addClass('active');

        $($(this).attr('data-accordion')).parents('.accordion-tab-cont').find('.accordion-tab').animate({
            'height': '0px'
        }, 350);
        $($(this).attr('data-accordion')).animate({
            'height': $($(this).attr('data-accordion')).find('.accordion-inner').outerHeight()+'px'
        }, 350);

        return false;
    });




    // Images Carousel
    if ($('.swiper-carousel').length > 0) {
        $('.swiper-carousel').each(function () {
            var carousel = $(this);

            if (carousel.find('.swiper-button-next').length > 0) {
                var nextButton = '.swiper-button-next';
                var prevButton = '.swiper-button-prev';
            } else {
                var nextButton = null;
                var prevButton = null;
            }
            if (carousel.find('.swiper-pagination').length > 0) {
                var pagination = '.swiper-pagination';
            } else {
                var pagination = null;
            }
            if (carousel.find('.swiper-scrollbar').length > 0) {
                var scrollbar = '.swiper-scrollbar';
            } else {
                var scrollbar = null;
            }

            var images_carousel = new Swiper(carousel, {
                roundLengths: true,
                loop: carousel.data('loop'),
                autoHeight: carousel.data('auto_height'),
                nextButton: nextButton,
                prevButton: prevButton,
                pagination: pagination,
                paginationType: carousel.data('pagination_type'),
                paginationClickable: true,
                scrollbar: scrollbar,
                scrollbarHide: carousel.data('scrollbar_hide'),
                scrollbarDraggable: carousel.data('scrollbar_draggable'),
                speed: carousel.data('speed'),
                autoplay: carousel.data('autoplay'),
                autoplayStopOnLast: carousel.data('autoplay_stop_on_last'),
                autoplayDisableOnInteraction: carousel.data('autoplay_disable_on_interaction'),
                freeMode: carousel.data('free_mode'),
                freeModeMomentum: carousel.data('free_mode_momentum'),
                freeModeSticky: carousel.data('free_mode_sticky'),
                spaceBetween: carousel.data('space_between'),
                slidesPerView: carousel.data('slides_per_view'),
                slidesPerGroup: carousel.data('slides_per_group'),
                centeredSlides: carousel.data('centered_slides'),
                grabCursor: carousel.data('grab_cursor'),
                direction: carousel.data('direction'),
                mousewheelControl: carousel.data('mousewheel_control'),
                keyboardControl: carousel.data('keyboard_control'),
                effect: carousel.data('effect'),

            });
        });
    }
    
    
    


    /*
     Sidebar
     */
    // Widgets Title
    if ($('.cont-withsb .widget .widget-ttl').length > 0) {
        $('.cont-withsb .widget').on('click', '.widget-ttl', function () {
            if ($(window).width() <= 991) {
                if ($(this).hasClass('opened')) {
                    $(this).removeClass('opened').next().slideUp();
                } else {
                    $(this).addClass('opened').next().slideDown();
                }
            }
            return false;
        });
    }

    // Search Widget: Toggle Features
    if ($('.widget-searchform .search2-features-toggle').length > 0) {
        $('.widget-searchform').on('click', '.search2-features-toggle', function () {
            var features_btn = $(this),
                features_el = features_btn.next('.search2-features');
            features_btn.toggleClass('opened');
            features_el.slideToggle();
            return false;
        });
    }



    /*
     Topblock
     */
    // Slider
    if ($('.topblock-slider').length) {
        var swiper = new Swiper('.topblock-slider', {
            loop: true,
            grabCursor: true,
            paginationClickable: true,
            pagination: '.topblock-slider .swiper-pagination',
            paginationBulletRender: function (swiper, index, className) {
                var prefix = '';
                if (index <= 8) {
                    prefix = 0;
                }
                return '<span class="' + className + '">' + prefix + (index + 1) + '</span>';
            }
        });
    }


    /*
     Form Elements Stylization
     */
    if ($(".chosen-select").length) {
        $(".chosen-select").chosen(/*{
            disable_search_threshold: 10
        }*/);
    }


    /* Search Form */

    // Tabs
    if ($(".search-tabs li[data-search-tab]").length) {
        $(".search-tabs").on('click', 'li[data-search-tab]', function () {
            var $this = $(this);
            var $tab_btns = $this.parents(".search-tabs").find('li[data-search-tab]');
            var $tabs = $this.parents(".search-tabs").find('.search-tab');
            var $tab = $this.parents(".search-tabs").find($this.attr('data-search-tab'));
            $tab_btns.removeClass('active');
            $this.addClass('active');
            $tabs.removeClass('active');
            $tab.addClass('active').hide().fadeIn();
            return false;
        });
    }

    // Range Slider
    if ($(".range-slider").length) {
        $(".range-slider").each(function () {
            var range_slider = $(this);
            var rangle_slider_data = {};
            if (range_slider.data('type')) {
                rangle_slider_data.type = range_slider.data('type')
            }
            if (range_slider.data('prefix')) {
                rangle_slider_data.prefix = range_slider.data('prefix')
            }
            if (range_slider.data('min')) {
                rangle_slider_data.min = range_slider.data('min')
            }
            if (range_slider.data('max')) {
                rangle_slider_data.max = range_slider.data('max')
            }
            if (range_slider.data('from')) {
                rangle_slider_data.from = range_slider.data('from')
            }
            if (range_slider.data('to')) {
                rangle_slider_data.to = range_slider.data('to')
            }
            if (range_slider.data('grid')) {
                rangle_slider_data.grid = range_slider.data('grid')
            }
            range_slider.ionRangeSlider(rangle_slider_data);
        });
    }




    // Fancybox Images
    $('.fancy-img').fancybox({
        padding: 0,
        margin: [60, 50, 20, 50],
        helpers: {
            overlay: {
                locked: false
            },
            thumbs: {
                width: 60,
                height: 60
            }
        },
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close modal-form-close2" href="javascript:;"></a>',
            prev: '<a title="Previous" class="fancybox-nav fancybox-prev modal-prev" href="javascript:;"><span></span></a>',
            next: '<a title="Next" class="fancybox-nav fancybox-next modal-next" href="javascript:;"><span></span></a>',
        }
    });

    // Modal Videos
    $(".gallery-grid").on('click', ".gallery-grid-video", function() {
        $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
                'wmode'             : 'transparent',
                'allowfullscreen'   : 'true'
            },
            tpl: {
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close modal-form-close2" href="javascript:;"></a>'
            }
        });
        return false;
    });

    

    // Datepicker
    if ($(".booking-datepicker").length) {
        $(".booking-datepicker").datepicker({
            inline: true
        });
    }



    // Quantity
    $('body').on('click change', '.qnt-wrap [data-qnt]', function () {
        var qnt = $(this).parent().find('input').val();
        if ($(this).data('qnt') == 'plus') {
            qnt++;
        } else if ($(this).data('qnt') == 'minus') {
            qnt--;
        }
        if (qnt > 0) {
            $(this).parent().find('input').attr('value', qnt);
        }
        return false;
    });



    // Top Menu - Toggle Button
    $('body').on('click', '#mainmenu-btn', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('#mainmenu-bg').fadeOut();
            $('body').removeClass('menu-opened');
        } else {
            var window_height = $(window).height();
            var items_count = $('#mainmenu-wrap > nav > ul > li').length;
            var items_height = Math.max((window_height-125)/items_count, 45);
            items_height = Math.min(items_height, 85);

            $(this).addClass('opened');

            $('body').addClass('menu-opened');

            var items_height_min = 999;
            $('#mainmenu-wrap > nav > ul > li > a').each(function () {
                var item_height = $(this).height();
                items_height_min = Math.min(item_height, items_height_min);
            });

            $('#mainmenu-wrap > nav > ul > li > a').each(function () {
                var item_margin = items_height - items_height_min;
                $(this).css('padding-top', Math.round(item_margin/2));
                $(this).css('padding-bottom', Math.round(item_margin/2));
            });

            $('#mainmenu-bg').fadeIn();
        }
        return false;
    });
    $('body').on('click', '#mainmenu-bg, #mainmenu-close', function () {
        $('#mainmenu-btn').removeClass('opened');
        $('body').removeClass('menu-opened');
        $('#mainmenu-bg').fadeOut();
        return false;
    });
    $('#mainmenu-wrap > nav > ul li.menu-item-has-children > a > .fa').on('click', function () {
        if ($(this).parent().parent().hasClass('opened')) {
            $(this).parent().parent().removeClass('opened');
            $(this).parent().next('ul').slideUp();
        } else {
            $(this).parent().next('ul').slideDown();
            $(this).parent().parent().addClass('opened');
        }
        return false;
    });



    // Search Toggle
    $('body').on('click', '#search-btn', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('body').removeClass('search-opened');
        } else {
            $(this).addClass('opened');
            $('body').addClass('search-opened');
        }
        return false;
    });
    $('html').on('click', 'body.search-opened', function () {
        $('#search-btn').removeClass('opened');
        $('body').removeClass('search-opened');
    });
    $('body').on('click', '.h-search', function(event){
        event.stopPropagation();
    });

    

    // Search Toggle
    $('body').on('click', '.mainttl-sort', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
        } else {
            $(this).addClass('opened');
        }
    });
    $('html').on('click', 'body', function () {
        $('.mainttl-sort').removeClass('opened');
    });
    $('body').on('click', '.mainttl-sort', function(event){
        event.stopPropagation();
    });



    // Modal Form
    if ($('.modalform-btn').length) {
        $('.modalform-btn').fancybox({
            content: $('.modalform'),
            padding: 0,
            helpers: {
                overlay: {
                    locked: false
                }
            },
            tpl: {
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close modal-form-close" href="javascript:;"></a>'
            }
        });
    }



    // Forms Validation
    var filterEmail  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    $('.form-validate').submit(function () {
        var errors = 0;
        $(this).find('[data-required="text"]').each(function () {
            if ($(this).attr('data-required-email') == 'email'){
                if (!filterEmail.test($(this).val())) {
                    $(this).addClass("redborder");
                    errors++;
                }
                else {
                    $(this).removeClass("redborder");
                }
                return;
            }
            if ($(this).val() == '') {
                $(this).addClass('redborder');
                errors++;
            } else {
                $(this).removeClass('redborder');
            }
        });
        if (errors === 0) {
            var form1 = $(this);
            $.ajax({
                type: "POST",
                url: 'php/email.php',
                data: $(this).serialize(),
                success: function(data) {
                    form1.append('<p class="form-result">Thank you!</p>');
                    $("form").trigger('reset');
                }
            });
        }
        return false;
    });
    $('.form-validate').find('[data-required="text"]').blur(function () {
        if ($(this).attr('data-required-email') == 'email' && ($(this).hasClass("redborder"))) {
            if (filterEmail.test($(this).val()))
                $(this).removeClass("redborder");
            return;
        }
        if ($(this).val() != "" && ($(this).hasClass("redborder")))
            $(this).removeClass("redborder");
    });




    if (jQuery().waypoint) {
        jQuery('.counter-i').waypoint(function () {
            jQuery('.counter-i-val').each(function () {
                var value = jQuery(this).data('value');
                jQuery(this).countTo({from: 0, to: value, refreshInterval: 10, speed: 1000});
            });
        }, {
            triggerOnce: true,
            offset     : 'bottom-in-view'
        });
    } else {
        jQuery(this).find('.counter-i-val').each(function () {
            var value = jQuery(this).data('value');
            jQuery(this).countTo({from: 0, to: value, refreshInterval: 10, speed: 1000});
        });
    }


    
});



(function($) {
jQuery(window).load(function(){


    // Gallery
    if ($('.gallery-grid').length > 0) {

        var $grid = $('.gallery-grid').isotope({
            itemSelector: '.gallery-grid-i',
        });
        $('.gallery-grid-sections').on('click', 'a', function() {
            var filterValue = $( this ).attr('data-section');
            $grid.isotope({ filter: filterValue });
        });
        $('.gallery-grid-sections').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on('click', 'a', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).parent().addClass('active');
                return false;
            });
        });

    }


    // Tabs "more" button
    if ($('.absolute-tabs').length > 0) {
        if ($(window).width() > 751) {
            var menu_sections = $('.absolute-tabs');
            var menu_width = menu_sections.width();
            var menu_items_width = 0;
            menu_sections.find('> li').each(function () {
                if (!$(this).hasClass('absolute-tabs-more')) {
                    menu_items_width = menu_items_width + $(this).outerWidth(true);
                    if (menu_width < menu_items_width) {
                        $(this).addClass('absolute-tabs-other');
                        $(this).appendTo('.absolute-tabs-sub');
                    } else if ($(this).hasClass('absolute-tabs-other')) {
                        $(this).removeClass('absolute-tabs-other');
                        $(this).prependTo('.absolute-tabs-sub');
                    }
                }
            });
            if (menu_width < menu_items_width) {
                $('.absolute-tabs-more').show();
            }
        }

        $('.absolute-tabs').addClass('sections-show');

        $(window).resize(function() {
            var menu_sections = $('.absolute-tabs');
            var menu_width = menu_sections.width();
            var menu_items_width = 0;
            if ($(window).width() > 751) {
                menu_sections.find('> li').each(function () {
                    menu_items_width = menu_items_width + ($(this).outerWidth(true) + 4);
                    if (!$(this).hasClass('absolute-tabs-more')) {
                        if (menu_width < menu_items_width) {
                            $(this).addClass('absolute-tabs-other');
                            $(this).appendTo('.absolute-tabs-sub');
                        } else if ($(this).hasClass('absolute-tabs-other')) {
                            $(this).removeClass('absolute-tabs-other');
                            $(this).prependTo('.absolute-tabs-sub');
                        }
                    }
                });
                if (menu_width < menu_items_width) {
                    $('.absolute-tabs-more').show();
                }
            } else {
                menu_sections.find('li.absolute-tabs-other').insertBefore('.absolute-tabs-more');
                menu_sections.find('li.absolute-tabs-other').removeClass('absolute-tabs-other');
            }
        });

    }

});
})(jQuery);
