  $(document).ready(function () {

    $('.scroll-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.main').offset().top
        }, 1000);
    });

    $('#play-button').hover(function(){
      $('.hover-video').fadeOut(500);

    });















});