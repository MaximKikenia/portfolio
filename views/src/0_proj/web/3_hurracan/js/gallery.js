function func() {
$('#header').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#Madeby').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#gallery').css({'opacity' : '1', 'transitionDuration': '2s'});
$('#blackpalka3').css({'opacity' : '1', 'transitionDuration': '2s'});
$('.preloader').css('opacity', '0')

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

