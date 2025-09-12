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

alert('Привет!')