'use strict';
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?aabebeaf95eba9076b8c3a6f11fd169c";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

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