$(document).ready(function(){
    
    $('.perekl').append("<div class='Point'></div>");
    
    $('.Point').css({'width' : '85%', 'height' : '85%', 'background' : 'transparent', 'margin' : '2px auto'});
    
    $('.Point').first().css({'width' : '85%', 'height' : '85%', 'background' : '#2a2a2a', 'margin' : '2px auto'});
    
    $('.Point').click(function(){
        $('.Point').first().css('background', 'transparent');
        $('.Point').css('background', 'transparent');
        $(this).css('background', '#2a2a2a')
    });
    
    /*Slider_Color*/
    
     $('.Point:eq(0)').click(function(){
        $('.car').removeClass().addClass('car car0 carG');
        $('.color-name').html("Arancio Borealis");
    })
    
    $('.Point:eq(1)').click(function(){
       $('.car').removeClass().addClass('car car1 carG');
       $('.color-name').html("Bianco Icarus Metallic");
    })
    
    $('.Point:eq(2)').click(function(){
       $('.car').removeClass().addClass('car car2 carG');
       $('.color-name').html("Verde Mantis");
    })
    
     $('.Point:eq(3)').click(function(){
        $('.car').removeClass().addClass('car car3 carG');
        $('.color-name').html("Blu Caelum Metallic");
    })
     
     $('.Point:eq(4)').click(function(){
        $('.car').removeClass().addClass('car car4 carG');
        $('.color-name').html("Giallo Midas Pearl");
    })
    
     $('.Point:eq(5)').click(function(){
        $('.car').removeClass().addClass('car car5 carG');
        $('.color-name').html("Marrone Alcestis Metallic");
    })
     
     $('.Point:eq(6)').click(function(){
        $('.car').removeClass().addClass('car car6 carG');
        $('.color-name').html("Rosso Mars Metallic");
    })
    
     $('.Point:eq(7)').click(function(){
        $('.car').removeClass().addClass('car car7 carG');
        $('.color-name').html("Bianco Monocerus");
    });
    
 
    /*Gallery*/

$('.t-gallery').append("<div class='blackB'><div class='Lup1'></div></div>");


$('.blackB').css({'widht':'100%', 'height' : '100%', 'background': 'black', 'opacity' : '0'})

$('.blackB').mouseover(function(){
 
$(this).css({'opacity' : '.7', 'transition-duration': '.5s'});   
       
});

$('.blackB').mouseleave(function(){
 
$(this).css('opacity', '0')
});


/*Hover-эффект галлереи-----------------------------------------------------*/
    
$('.Lup1').css({'width' : '60px', 'height' : '60px', 'margin' : '67px 130px', 'display' : 'inline-block', 'opacity' : '1'});
    
});

/*Галлерея---------------------------------------------------------------*/




$('.Zakrit').click(function(){
    $('.gallery').css('display', 'none');
    $('.galleryCont').css('display',  'none');
});


$('.t-gallery').click(function(){
    $('.gallery').css('display', 'block');
    $('.galleryCont').css('display',  'block');
    
    if($(this).hasClass('t-1')) {
        $('.gallery').removeClass().addClass('gallery t-1-1');
    }
    
    if($(this).hasClass('t-2')) {
        $('.gallery').removeClass().addClass('gallery t-1-2');
    }
    
    if($(this).hasClass('t-3')) {
        $('.gallery').removeClass().addClass('gallery t-1-3');
    }
    
    if($(this).hasClass('t-4')) {
        $('.gallery').removeClass().addClass('gallery t-1-4');
    }

});

/*Gallery Strelki*/

$('.strelka1').click(function(){
    if ($('.gallery').hasClass('t-1-1')) {
        $('.gallery').removeClass().addClass('gallery t-1-2');
    }
    
     else if ($('.gallery').hasClass('t-1-2')) {
        $('.gallery').removeClass().addClass('gallery t-1-3')
    }
    
    else if ($('.gallery').hasClass('t-1-3')) {
        $('.gallery').removeClass().addClass('gallery t-1-4')
    }
    
     else if ($('.gallery').hasClass('t-1-4')) {
        $('.gallery').removeClass().addClass('gallery t-1-1')
    }  
})

$('.strelka2').click(function(){
    if ($('.gallery').hasClass('t-1-1')) {
        $('.gallery').removeClass().addClass('gallery t-1-4');
    }
    
     else if ($('.gallery').hasClass('t-1-2')) {
        $('.gallery').removeClass().addClass('gallery t-1-1')
    }
    
    else if ($('.gallery').hasClass('t-1-3')) {
        $('.gallery').removeClass().addClass('gallery t-1-2')
    }
    
     else if ($('.gallery').hasClass('t-1-4')) {
        $('.gallery').removeClass().addClass('gallery t-1-3')
    }  
})


/*Preloader____________________________________________________________________________________*/

$('.preloader').css({'width' : '150px', 'height' : '150px', 'backgroundImage' : 'url("photoes/preloader3.gif")', 'backgroundSize' : '60px', 'backgroundRepeat':'no-repeat', 'backgroundPosition' : '43px 45px', 'margin' : '19% auto', 'opacity' : '1', 'position' : 'relative'});
    



function func() {

$('#header').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#t-section1').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#t-blackpalka2').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#t-section2').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#t-blackpalka1').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#Madeby').css({'opacity' : '1', 'transitionDuration': '2s'});
    
$('.preloader').css({'width' : '150px', 'height' : '150px', 'backgroundImage' : 'url("photoes/preloader.gif")' , 'margin' : '-610px auto', 'opacity' : '0', 'position' : 'relative'});
}

setTimeout(func, 2000);
    
/*Lambo_logo_heart_beat_____________________________________________________________*/

var audio = $(".heart_beat")[0];
$("#head-logo").mouseenter(function() {
  audio.play();
});

$("#head-logo").mouseleave(function() {
  audio.pause();
});

var audio2 = $(".lambo_engine")[0];
$("#head-car").mouseenter(function() {
  audio2.play();
});

$("#head-car").mouseleave(function() {
  audio2.pause();
});



    

    






