$(document).ready(function(){

     /*Hover-эффекты пунктов меню*/
     
     $('.menu_punkts').mouseover(function(){
         $(this).css({
             "borderRadius" : "5px",
             "background" : "#dd94d4",
             "color" : "white",
             "border" : "transparent 1px solid"
         })

     })
     
      $('.menu_punkts').mouseleave(function(){
         $(this).css({
             "border" : "solid #8b8b8b 1px",
             "borderRadius" : "10px",
             "background" : "white",
             "color" : "black"
         })
     })
     
    
    /*Скроллы по якорям*/
    
       $('a').click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
    
    /*Боковой навигатор*/
    
    $('.spisokNavi').css({'opacity' : '0', 'transitionDuration' : '.5s'});
    $('.buttonNavi').css({'opacity' : '0', 'transitionDuration' : '.2s'});
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 610) {
            $('.spisokNavi').css('opacity', '1');
            $('.buttonNavi').css('opacity', '1');
        }
        
        else {
           $('.spisokNavi').css('opacity', '0');
           $('.buttonNavi').css('opacity', '0');
        }
    });
    
        /*Закр, откур бок навигатор*/
    
    $('.buttonNavi').click(function(){
        $('.spisokNavi').toggleClass('Show');
        $(this).toggleClass('greenButton')
    })
    
    /*Появление блоков*/
    
    $('.section3').css('opacity', '0');
    $('.section4').css('opacity', '0')
    $('.section5').css('opacity', '0')
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 590) {
            $('.section3').css('opacity', '1');
        }
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 863) {
            $('.section4').css('opacity', '1');
        }
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 1500) {
            $('.section5').css('opacity', '1');
        }
        
    })
})

