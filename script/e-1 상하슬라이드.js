


$(function(){

    let bgHeight = $('.mainBanner ul li').height();
    let dir = '-=';
    let slide = setInterval(autoSlide, 3000);
    
    function autoSlide(){
        $('.mainBanner ul').animate({'marginTop' : dir + bgHeight}, 1500, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-Top', 0);
        });

    }

    $('#main .openBtn').on('click', function(){
        $('#modalPopup').addClass('show');
    });
    $('#modalPopup .closeBtn').on('click', function(){
        $('#modalPopup').removeClass('show');
    });

});

