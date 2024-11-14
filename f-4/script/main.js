$(function(){
    let bgWidth = $('.slide-list li').width();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.slide-list').animate({'marginLeft' : dir + bgWidth}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-left', 0);
        });
    }

    $('.ob1').on('click', function(){
        $('#modal').addClass('show1');
    });
    $('.cb1').on('click', function(){
        $('#modal').removeClass('show1');
    });

    $('.ob2').on('click', function(){
        $('#layer').addClass('show2');
    });
    $('.cb2').on('click', function(){
        $('#layer').removeClass('show2');
    });
});