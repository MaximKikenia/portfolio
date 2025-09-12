$(document).ready(function(){


$('.popup__close').click(function(){
	$('.popup').css({'display': 'none'});
});

//drop filter_menu

$('.mob_filt').click(function(){
	$('.drop__mobile_menu').css({'right': '0'})
});

$('.drop_close').click(function(){
	$('.drop__mobile_menu').css({'right': '-300px'})
});

var state = false;

$('.mob_main_menu').click(function(){

	if(state == false) {
	  $('.header').css({'height':'auto'});
	  state = true;
	 }
	 else {
	  $('.header').css({'height':'0'});
	  state = false;
	 }

});

$('.list_2').click(function(){
	$(this).children().toggleClass('active');
});





});