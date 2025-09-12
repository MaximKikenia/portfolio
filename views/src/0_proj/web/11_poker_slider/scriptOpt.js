    $(document).ready(function(){

    //text tap

	$('.readMore').mousedown(function(){
		$(this).css('transform', 'scale(.9)')
	});

	$('.readMore').mouseup(function(){
		$(this).css('transform', 'scale(1)')
	});

	//text arrow left

	$('.button_1').mousedown(function(){
		$('.ar').css({'transform':'scale(.7)'});
		$(this).css({'background' : '#b91515'});
	});

	$('.button_1').mouseup(function(){
		$('.ar').css({'transform' : 'scale(1)'});
		$(this).css({'background' : 'none'});
	});

	//text arrow right

	$('.button_2').mousedown(function(){
		$('.ar2').css('transform', 'scale(.7)')
		$(this).css({'background' : '#b91515'});
	});

	$('.button_2').mouseup(function(){
		$('.ar2').css('transform', 'scale(1)')
		$(this).css({'background' : 'none'});
	});

	//Zoom function

	$('.zoom').mousedown(function(){
		$(this).css('transform', 'scale(.8)')
	});

	$('.zoom').mouseup(function(){
		$(this).css('transform', 'scale(1)')
	});

	//Close LightBox

	$('.close').mousedown(function(){
		$(this).css('transform', 'scale(.8)')
	});

	$('.close').mouseup(function(){
		$(this).css('transform', 'scale(1)')
	});





    });
