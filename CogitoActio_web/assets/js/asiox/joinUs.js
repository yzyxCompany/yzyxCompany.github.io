'use strict';
function positionMenuCheck() {
    $('.position-menu').each(function (i) {
        $(this).on('click',function (i) {
            $('.position-menu').parent('li').removeClass('active');
            $(this).parent('li').addClass('active');
            getData(i);
        })
    })
}

$(function () {
    positionMenuCheck();
});