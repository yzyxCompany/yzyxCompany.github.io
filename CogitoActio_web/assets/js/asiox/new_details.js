'use strict';
var getData = function () {
    axios.get('assets/json/news_details.json')
        .then(function(res){
            var details_data = res.data.data;
            var page_url = window.location.href;
            var id = page_url.split('?id=');
            for(var n in details_data){
                if(details_data[n].id === id[1]){
                    $('.details-title-box').find('h2').html(details_data[n].title);
                    $('.details-title-box').find('span').eq(0).html(details_data[n].date);
                    $('.details-title-box').find('span').eq(1).html(details_data[n].author);
                    $('.details-content-card').find('.details-content-box').html(details_data[n].content);
                }
            }
        })
        .catch(function(err){
            console.log(err);
        });
};
getData();