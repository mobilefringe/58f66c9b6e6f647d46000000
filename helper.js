function init() {
    $('<div class="modal-backdrop custom_backdrop"><div class="loader">Loading...</div></div>').appendTo(document.body);
    
    if($(window).width() >= 768 && $(window).width() <= 1024) {
      $('meta[name=viewport]').attr('content','width=980, user-scalable=no');
    }
    
    $('#back-top a').click(function () {
        $('body,html').animate({
        	scrollTop: 0
        }, 800);
        return false;
    });
    
    $(".menu-phone-btn").click(function(){
        $(".menu-phone-list").slideToggle("fast");
    });
                
    if($(window).width() >= 768) {
        var top = $('#header').offset().top - parseFloat($('#header').css('marginTop').replace(/auto/, 100));
        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= top) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
            if (y > 300) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
    }
}

function show_content(){
    $(".yield").css({visibility: "visible"});
    $(".modal-backdrop").remove();
}