function init() {
    $('<div class="modal-backdrop custom_backdrop"><div class="loader">Loading...</div></div>').appendTo(document.body);
    
    $('#back-top a').click(function () {
        $('body,html').animate({
        	scrollTop: 0
        }, 800);
        return false;
    });
    
    $(".menu-phone-btn").click(function(){
        $(".menu-phone-list").slideToggle("fast");
    });

}

function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
    // var windowWidth = $(window).width();
    // if(windowWidth <= 1024) {
    //      $('.panel-collapse').removeClass('in')
    // }
}