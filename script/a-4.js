var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$(function(){
    $('.family button').on('click', function(){
        $('.family ul').toggleClass('familyUp');
    });
});

$(function(){
    $('.openBtn').on('click', function(){
        $('#popup').addClass('show');
    });
    $('.closeBtn').on('click', function(){
        $('#popup').removeClass('show');
    });
});