'use strict';

//设页面中banner的内容剧中
function Scroll() {
    var winHeight =  $(window).height();
    var winTop = $(window).scrollTop();
    if(winTop>100){
        $('.navbar').removeClass('navbar-transparent')
    }else{
        $('.navbar').addClass('navbar-transparent')
    }
    if(winTop > winHeight-200){
        $('.page-top').fadeIn(1000);
    }else{
        $('.page-top').fadeOut(750);
    }
};

var boxHeight = function() {
    var winWidth =  $(window).width();
    var winHeight =  $(window).height();
    $('.flexslider').css('height', winHeight);
    $('.caption-box').css('padding-top', ($('.flexslider-box').height() - $('.caption-content-box').height())/2);
    var contactBox = $('.contact-box');
    if(winWidth>=992){
        contactBox.eq(1).css('height',contactBox.eq(0).height());
    }else{
        contactBox.eq(1).css('height','auto');
    }

    if(winWidth>=1200 || winWidth<768){
        $('.card2').find('.item').eq(0).css('height', 'auto');
        $('.originator-section').find('.item').eq(0).css('height', 'auto');
    }else {
        var boxHeight1= $('.card2').find('.item').eq(1).height();
        $('.card2').find('.item').eq(0).css('height', boxHeight1 + 10);

        var boxHeight2= $('.originator-section').find('.item').eq(1).height();
        $('.originator-section').find('.item').eq(0).css('height', boxHeight2 + 10);
    }
};

var flexSliderMain = function() {
    $('.flexslider-box').flexslider({
        animation: "fade",
        slideshowSpeed: 10000,
        directionNav: false,
        start: function(){
            setTimeout(function(){
                $('.flexslider-box .caption-content-box').removeClass('animated fadeInUp');
                $('.caption-box').css('padding-top', ($('.flexslider-box').height() - $('.caption-content-box').height())/2);
                $('.flexslider-box .flex-active-slide').find('.caption-content-box').addClass('animated fadeInUp');
            }, 500);
        },
        before: function(){
            setTimeout(function(){
                $('.flexslider-box .caption-content-box').removeClass('animated fadeInUp');
                $('.caption-box').css('padding-top', ($('.flexslider-box').height() - $('.caption-content-box').height())/2);
                $('.flexslider-box .flex-active-slide').find('.caption-content-box').addClass('animated fadeInUp');
            }, 500);
        }
    });
};

var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function(){
                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated');
                        } else {
                            el.addClass('fadeInUp animated');
                        }
                        el.removeClass('item-animate');
                    },  k * 300, 'easeInOutExpo' );
                });
            }, 300);
        }
    } , { offset: '85%' } );
};

function pageTopCheck() {
    $('.page-top').on('click',
        function () {
            $('html,body').animate({
                scrollTop:0
            },600)
        }
    )
}
$(window).scroll(function(event) {
    Scroll();
});

window.onload = function () {
    boxHeight();
    flexSliderMain();
    contentWayPoint();
    pageTopCheck();
};

window.onresize = function () {
    boxHeight();
};