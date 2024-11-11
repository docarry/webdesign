$(function(){

    let slideWidth = $('.slideBox .slideList li').width();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.slideBox .slideList').animate({'marginLeft' : dir + slideWidth}, 1000, function(){ // 1초에 걸쳐서
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-left', 0);
        });
    }

    $('.noticeBox .openBtn').on('click', function(){
        $('#modal').addClass('show');
    });
    $('#modal .closeBtn').on('click', function(){
        $('#modal').removeClass('show');
    });

});