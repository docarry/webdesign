


$(function(){

    let count = 0;

    $('.mainBanner ul li').eq(count).fadeIn(300);

    setInterval(function(){ 
        count++;
        count %= $('.mainBanner ul li').length;                
    $('.mainBanner ul li').eq(count).fadeIn(300).siblings().fadeOut(300);}, 1500);
    

    $('#main .openBtn').on('click', function(){
        $('#modalPopup').addClass('show');
    });
    $('#modalPopup .closeBtn').on('click', function(){
        $('#modalPopup').removeClass('show');
    });

});
