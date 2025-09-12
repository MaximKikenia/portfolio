$(document).ready(function(){
    

$('.GalIndex').append("<div class='blackB'><div class='Lup1'></div></div>");

$('.blackB').css({'widht':'100%', 'height' : '100%', 'background': 'black', 'opacity' : '0'});
    
$('.Lup1:eq(1)').css('margin', '47px 130px');
$('.Lup1:eq(2)').css('margin', '47px 130px');
$('.Lup1:eq(4)').css('margin', '129px 67px');

$('.blackB').mouseover(function(){
 
$(this).css({'opacity' : '.7', 'transition-duration': '.5s'});   
       
});

$('.blackB').mouseleave(function(){
 
$(this).css('opacity', '0')
});

$('.Lup1').css({'width' : '60px', 'height' : '60px', 'display' : 'inline-block', 'opacity' : '1'});

    
})

/*Gallery_________________________________________________________________________________________*/

$('.Zakrit').click(function(){
    $('.gallery').css('display', 'none');
    $('.galleryCont').css('display',  'none');
});


$('.GalIndex').click(function(){
    $('.gallery').css('display', 'block');
    $('.galleryCont').css('display',  'block');
    
    if($(this).hasClass('gallery-pic1')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-1');
    }
    
    if($(this).hasClass('gallery-pic2')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-2');
    }
    
    if($(this).hasClass('gallery-pic3')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-3');
    }
    
    if($(this).hasClass('gallery-pic4')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-4');
    }
    
    if($(this).hasClass('gallery-pic5')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-5');
    }

});

/*Gallery Strelki*/

$('.strelka1').click(function(){
    if ($('.gallery').hasClass('gallery-pic1-1')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-2');
    }
    
     else if ($('.gallery').hasClass('gallery-pic1-2')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-3')
    }
    
    else if ($('.gallery').hasClass('gallery-pic1-3')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-4')
    }
    
     else if ($('.gallery').hasClass('gallery-pic1-4')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-5')
    }
    
     else if ($('.gallery').hasClass('gallery-pic1-5')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-1')
    } 
})

$('.strelka2').click(function(){
    if ($('.gallery').hasClass('gallery-pic1-1')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-5');
    }
    
     else if ($('.gallery').hasClass('gallery-pic1-5')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-4')
    }
    
    else if ($('.gallery').hasClass('gallery-pic1-4')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-3')
    }
    
     else if ($('.gallery').hasClass('gallery-pic1-3')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-2')
    }
    
     else if ($('.gallery').hasClass('gallery-pic1-2')) {
        $('.gallery').removeClass().addClass('gallery gallery-pic1-1')
    }
})


/*Preloader------------------------------------------------------------------------*/


$('.preloader').css({'width' : '150px', 'height' : '150px', 'backgroundImage' : 'url("photoes/preloader3.gif")', 'backgroundSize' : '60px', 'backgroundRepeat':'no-repeat', 'backgroundPosition' : '43px 45px', 'margin' : '19% auto', 'opacity' : '1', 'position' : 'relative'});
    


function func() {
$('#header').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#section1').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#section2').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#Madeby').css({'opacity' : '1', 'transitionDuration': '2s'});
$('.preloader').css({'width' : '150px', 'height' : '150px', 'backgroundImage' : 'url("photoes/preloader.gif")' , 'margin' : '-600px auto', 'opacity' : '0', 'position' : 'relative'});
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



