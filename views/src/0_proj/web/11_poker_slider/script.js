$(document).ready(function(){

var info = [
    {url: 'https://www.youtube.com/embed/FzPkhPCvczA',
	text: 'Раньше играл достаточно скромно, но потом понял, что нужно что-то менять и начал искать обучающие статьи, какие-то нотсы. Сразу же нашёл Академию Покера, и первое, что впечатлило, при просмотре видео, подача материала от тренеров, а также сама... специфика.занятий. После чего и решил записаться.'},
	{url: 'https://www.youtube.com/embed/bppVcyiNURE?si=UsQX5-81Y8CX4XLd',
	text: 'фывфывфыв Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
	{url: 'https://www.youtube.com/embed/WwsmU8a9Bhs',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use.'},
	{url: 'https://www.youtube.com/embed/bgvA6Y67Z1E',
	text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'},
];


for (var i = 0; i < info.length; i++) {
	$('.points').append('<div class="point"></div>');
}

//Next slide

var counter = 0;
var state = true;

$('.button_2').click(function(event){

	if(state == true) {

	if(counter <= info.length - 2){
	   counter++;
	   totalAnimation(counter);
	} else {
	   counter = 0;
	   totalAnimation(counter);
	}

	colorPoints();

	state = false;

    setTimeout(state2, 3000);

    function state2() {
	  state = true;
	}

	console.log(counter);
} else {
	return false;
}

});

//Color points function

function colorPoints(){
	$('.point').css({'background' : '#e5e5e5'});
	$('.point').eq(counter).css({'background' : 'red'});
};


//Previous slide

$('.button_1').click(function(event){

	if(state == true) {

	if(counter == 0){
	   counter = info.length - 1;
	   totalAnimation(counter);
	} else {
	   counter --;
	   totalAnimation(counter);
	}

	colorPoints();

	state = false;

	setTimeout(state3, 3000);

	function state3() {
		state = true;
	}
   
   } else {
		return false;
   }

});

$('.point').click(function(){

	//point index
    var pointIndex = $(this).index();
    counter = pointIndex;
    totalAnimation(pointIndex);

    if(state == true) {
    	$('.point').css('background', '#e5e5e5');
		$(this).css({'background' : 'red'});
		state = false;

		setTimeout(state4, 3000);

	    function state4() {
		  state = true;
	    }
	} else {
		return false;
	}

});


//Animation block function

function totalAnimation(number){

	//Change video animation

	var video = $('.video').hasClass('animation');

	if(video) {
    } else {

    	//Video animation

    	setTimeout(videoAnim, 300);

    	function videoAnim(){
      		$('.video').addClass('animation');

    		setTimeout(changeVideo, 450);
        
        	function changeVideo(){
          		$('.video_clip').attr('src', info[number].url);
        	};

	    	setTimeout(removeClass, 2700);
        
        	function removeClass(){
          		$('.video').removeClass('animation');
	    	};
		};

	    //Text animation

	    $('.slider__desc').addClass('animation2');

	    setTimeout(removeClass2, 2000);
        
        function removeClass2(){
          $('.slider__desc').removeClass('animation2');
	    };

	    setTimeout(changeText, 500);

	    function changeText(){
	    	$('.slider_text').text(info[number].text);
	    };


	    //Animation Diagram

	    setTimeout(diagramAnim, 400);

	    function diagramAnim(){


	    	$('.diagram').addClass('animation3');

	    	setTimeout(removeClass3, 2000);
        
        	function removeClass3(){
          		$('.diagram').removeClass('animation3');
	    	};

	    };
	}
};

//Light Box

$('.zoom').click(function(){
	$('.lightBox').css({'opacity': '1', 'zIndex' : '300'});
});

$('.close').click(function(){
	$('.lightBox').css({'opacity': '0', 'zIndex' : '-300'});
});


//Read more function //


$('.readMore').click(function(){
	$('.slider__desc').toggleClass('textAnim');
	$('.caret').toggleClass('caret_change');
});




});