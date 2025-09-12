$(document).ready(function(){
    $('.section2').css('opacity', '0');
    $('.Rasp1, .Rasp2, #Clock, #Sh').css('opacity', '0');
    $('.Shapka2, .map').css('opacity', '0');
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200) {
            $('.section2').css('opacity', '1');
        }
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 770) {
            $('.Rasp1, .Rasp2, #Clock, #Sh').css('opacity', '1');
        }
    })
    
     $(window).scroll(function(){
        if($(this).scrollTop() >= 1300) {
            $('.Shapka2, .map').css('opacity', '1');
        }
    })
})