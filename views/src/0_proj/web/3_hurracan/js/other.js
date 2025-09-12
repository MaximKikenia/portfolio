$(document).ready(function(){
    
       $('.Lupa').click(function(){
           
       $('.galleryCont').css('display',  'block');
       $('.gallery').css('display', 'block');
       
       $('.Zakrit').click(function(){
           $('.gallery').css('display', 'none');
           $('.galleryCont').css('display',  'none');
       });
       
/*AUDI______________________________________________________________*/
       
       if($(this).hasClass('Lupa1')) {
           $('.gallery').removeClass().addClass('gallery G-Audi-1');
       }
       
       if($(this).hasClass('Lupa1.1')) {
           $('.gallery').removeClass().addClass('gallery G-Audi-2');
       }
       
       if($(this).hasClass('Lupa1.2')) {
           $('.gallery').removeClass().addClass('gallery G-Audi-3');
       };
           
           /*MCLAREN______________________________________________________________*/
       
            if($(this).hasClass('Lupa0')) {
           $('.gallery').removeClass().addClass('gallery G-MCL-1');
       }
       
       if($(this).hasClass('Lupa0.1')) {
           $('.gallery').removeClass().addClass('gallery G-MCL-2');
       }
       
       if($(this).hasClass('Lupa0.2')) {
           $('.gallery').removeClass().addClass('gallery G-MCL-3');
       }
       
        /*Ferrari______________________________________________________________*/
       
            if($(this).hasClass('Lupa2')) {
           $('.gallery').removeClass().addClass('gallery G-FER-1');
       }
       
       if($(this).hasClass('Lupa2.1')) {
           $('.gallery').removeClass().addClass('gallery G-FER-2');
       }
       
       if($(this).hasClass('Lupa2.2')) {
           $('.gallery').removeClass().addClass('gallery G-FER-3');
       }
       
       /*BMW*/
       
       if($(this).hasClass('Lupa3')) {
           $('.gallery').removeClass().addClass('gallery G-BMW-1');
       }
       
       if($(this).hasClass('Lupa3.1')) {
           $('.gallery').removeClass().addClass('gallery G-BMW-2');
       }
       
       if($(this).hasClass('Lupa3.2')) {
           $('.gallery').removeClass().addClass('gallery G-BMW-3');
       };
}); 
    
    /*Стрелки-AUDI______________________________________________________________*/
    
           $('.strelka1').click(function() {
           if ($('.gallery').hasClass('gallery G-Audi-1')) {
               $('.gallery').removeClass().addClass('gallery G-Audi-2');
           }
           
            else if ($('.gallery').hasClass('gallery G-Audi-2')) {
               $('.gallery').removeClass().addClass('gallery G-Audi-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-Audi-3')) {
               $('.gallery').removeClass().addClass('gallery G-Audi-1');
           }
           
       });
    
    
    $('.strelka2').click(function() {
           if ($('.gallery').hasClass('gallery G-Audi-1')) {
               $('.gallery').removeClass().addClass('gallery G-Audi-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-Audi-2')) {
               $('.gallery').removeClass().addClass('gallery G-Audi-1');
           }
           
            else if ($('.gallery').hasClass('gallery G-Audi-3')) {
               $('.gallery').removeClass().addClass('gallery G-Audi-2');
           }
           
       });
    
/*Стрелки-MCLAREN______________________________________________________________*/
    
       $('.strelka1').click(function() {
           if ($('.gallery').hasClass('gallery G-MCL-1')) {
               $('.gallery').removeClass().addClass('gallery G-MCL-2');
           }
           
            else if ($('.gallery').hasClass('gallery G-MCL-2')) {
               $('.gallery').removeClass().addClass('gallery G-MCL-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-MCL-3')) {
               $('.gallery').removeClass().addClass('gallery G-MCL-1');
           }
           
       });
    
      $('.strelka2').click(function() {
           if ($('.gallery').hasClass('gallery G-MCL-1')) {
               $('.gallery').removeClass().addClass('gallery G-MCL-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-MCL-2')) {
               $('.gallery').removeClass().addClass('gallery G-MCL-1');
           }
           
            else if ($('.gallery').hasClass('gallery G-MCL-3')) {
               $('.gallery').removeClass().addClass('gallery G-MCL-2');
           }
           
       });
    
    /*Стрелки-Ferrari______________________________________________________________*/
    
       $('.strelka1').click(function() {
           if ($('.gallery').hasClass('gallery G-FER-1')) {
               $('.gallery').removeClass().addClass('gallery G-FER-2');
           }
           
            else if ($('.gallery').hasClass('gallery G-FER-2')) {
               $('.gallery').removeClass().addClass('gallery G-FER-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-FER-3')) {
               $('.gallery').removeClass().addClass('gallery G-FER-1');
           }
           
       });
    
           $('.strelka2').click(function() {
           if ($('.gallery').hasClass('gallery G-FER-1')) {
               $('.gallery').removeClass().addClass('gallery G-FER-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-FER-2')) {
               $('.gallery').removeClass().addClass('gallery G-FER-1');
           }
           
            else if ($('.gallery').hasClass('gallery G-FER-3')) {
               $('.gallery').removeClass().addClass('gallery G-FER-2');
           }
           
       });
    
        /*Стрелки-BMW______________________________________________________________*/
    
       $('.strelka1').click(function() {
           if ($('.gallery').hasClass('gallery G-BMW-1')) {
               $('.gallery').removeClass().addClass('gallery G-BMW-2');
           }
           
            else if ($('.gallery').hasClass('gallery G-BMW-2')) {
               $('.gallery').removeClass().addClass('gallery G-BMW-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-BMW-3')) {
               $('.gallery').removeClass().addClass('gallery G-BMW-1');
           }
           
       });
    
           $('.strelka2').click(function() {
           if ($('.gallery').hasClass('gallery G-BMW-1')) {
               $('.gallery').removeClass().addClass('gallery G-BMW-3');
           }
           
            else if ($('.gallery').hasClass('gallery G-BMW-2')) {
               $('.gallery').removeClass().addClass('gallery G-BMW-1');
           }
           
            else if ($('.gallery').hasClass('gallery G-BMW-3')) {
               $('.gallery').removeClass().addClass('gallery G-BMW-2');
           }
           
       });
    

$('.preloader').css({'width' : '150px', 'height' : '150px', 'backgroundImage' : 'url("photoes/preloader3.gif")', 'backgroundSize' : '60px', 'backgroundRepeat':'no-repeat', 'backgroundPosition' : '43px 45px', 'margin' : '19% auto', 'opacity' : '1', 'position' : 'relative'});
    



function func() {
$('#header').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#O-blackpalka').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#O-section1').css({'opacity' : '1', 'transitionDuration': '2s'});
$('.section2').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#O-blackpalka2').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#Madeby').css({'opacity' : '1', 'transitionDuration': '2s'});
$('.preloader').css({'width' : '150px', 'height' : '150px', 'backgroundImage' : 'url("photoes/preloader.gif")' , 'margin' : '-600px auto', 'opacity' : '0', 'position' : 'relative'});
}

setTimeout(func, 2000);
    
});

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