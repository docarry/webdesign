$(function(){

    let count = 0;

    $('.slide-box ul li').eq(count).fadeIn(1000);

    setInterval(function(){
        count++;
        count %= $('.slide-box ul li').length;
    $('.slide-box ul li').eq(count).fadeIn(1000).siblings().fadeOut(1000)}, 3000);

    $('.list01 .open-btn').on('click', function(){
        $('#modal').addClass('show')
    });

    $('#modal .close-btn').on('click', function(){
        $('#modal').removeClass('show')
    });

});