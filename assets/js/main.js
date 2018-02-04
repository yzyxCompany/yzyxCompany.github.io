'use strict';
var boxHeight = function() {
    var winWidth =  $(window).width();
    var illustrationContent = $('.illustration-content-box');
    var illustrationPicture = $('.illustration-picture-box');
    if(winWidth>=768){
        illustrationContent.css('height',illustrationPicture.height());
    }else{
        illustrationContent.css('height','auto');
    }
};

var accordionMenu = function () {
    $('.course-module-title').on('click',function () {
        $('.course-module-card').removeClass('active');
        $(this).parent('.course-module-card').addClass('active');
    })
};

window.onload = function () {
    boxHeight();
    accordionMenu();
};

window.onresize = function () {
    boxHeight();
};