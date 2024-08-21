$(function(){
    $('.open-btn').on('click', function(){
        $('#popup').addClass('show');
    });
    $('.close-btn').on('click', function(){
        $('#popup').removeClass('show');
    });
});