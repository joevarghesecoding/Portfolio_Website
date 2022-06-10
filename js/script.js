
$(document).ready(function() {

    $('.scrolling-pc').hide();  
    $('.scrolling-pc-portrait').hide();
    // menu button
    $('.menu-btn').click(function() {
    $(".btn-pressed-nav").toggle();
    
    $(window).resize(function() {
        if($(this).width() > 784){
            $('.btn-pressed-nav').hide();
        }
    })

    });

    // scrolling pc : https://tutorialdeep.com/knowhow/show-hide-image-on-scroll-down-jquery/
    
    $(window).scroll(function(){
            var $width = $(window).width();
            console.log('width : ' + $width );
        if($(this).scrollTop()>650 && $width > 1050) {
            $('.scrolling-pc').show(400);
        }
        //else if when width is correcet for portrait mode
        else{
            $('.scrolling-pc').hide(1000);
        }
    });

   $(window).resize(function(){
    location.reload(2000);
   });

   if($(window).width() <= 1050)
   {
       $('.big-screen').hide();
       $('.big-screen-portrait').show();
       $('.scolling-pc').hide();
   }
   else if($(window).width() > 1050){
        $('.big-screen').show();
       $('.big-screen-portrait').hide();
       $('.scolling-pc').show();
   }

});


//RESUME
