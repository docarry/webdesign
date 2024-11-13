$(function(){
    let bgHeight = $('.banner-box .slide li').height();
    let dir = '-=';
    let slide = setInterval(autoSlide, 3000);

    function autoSlide(){
        $('.banner-box .slide').animate({'marginTop' : dir + bgHeight}, 1500, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-top', 0);
        });
    }

    $('.open-btn1').on('click', function(){
        $('#layer').addClass('show1');
    });
    $('.close-btn1').on('click', function(){
        $('#layer').removeClass('show1');
    });
    $('.open-btn2').on('click', function(){
        $('#modal').addClass('show2');
    });
    $('.close-btn2').on('click', function(){
        $('#modal').removeClass('show2');
    });
});