


$(function(){

    let slideWidth = $('.mainBanner ul li').width();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.mainBanner ul').animate({'marginLeft' : dir + slideWidth}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-left', 0);
        }); 
    }
    

    $('#main .openBtn').on('click', function(){
        $('#modalPopup').addClass('show');
    });
    $('#modalPopup .closeBtn').on('click', function(){
        $('#modalPopup').removeClass('show');
    });

});
