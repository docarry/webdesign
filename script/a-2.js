// $(function(){
//     $('.notice-box1 li:first').on('click', function(){
//         $('#popup').show();
//     });
//     $('.popup-box button').on('click', function(){
//         $('#popup').hide();
//     });
// });

$(function(){
    $('.c-1 dl:first').on('click', function(){
        $('#popup').addClass('show');
    });
    $('.popup-box button').on('click', function(){
        $('#popup').removeClass('show');
    });
});