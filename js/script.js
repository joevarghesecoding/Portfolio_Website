//nav button code

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


//nav blur upon scrolling

$(document).ready(function() {
    const nav = document.querySelector('nav');
    const brand = document.querySelector('.nav-brand');
    const nav_list = document.querySelector('.nav-list');
    let lastScrollPos = 0;
    window.addEventListener('scroll', function() {
        lastScrollPos = window.scrollY;
        console.log(lastScrollPos);
        if(lastScrollPos > 600){
            nav.style.backgroundColor = 'rgba(101, 123, 131, 0.7)';
            nav.style.transition = 'background-color 1s ease';
        }
        else {
            nav.style.backgroundColor = 'rgb(101, 123, 131)';
        }
    })
});

//RESUME
