
/* Show-Hide Navbar function */

var state = false;

$(".N-button-box").click(function(){

    if(state == false) {
        $("ul").css({"height" : "inherit"});
        state = true;
    } else {
        $("ul").css({"height" : "56px"});
        state = false;
    }

});

function windowSize(){
    if ($(window).width() >= "994"){
        $("ul").css({"height" : "40px"});
        state = false;
    } else {
        $("ul").css({"height" : "56px"});
    }
}

$(window).resize(windowSize);


/* Show-Hide Form button */

$(".header-recall").click(function(){
    $(".popup").css({"display": "block"});
    $(".form").css({"display": "block"});
});

$(".closer").click(function(){
    $(".popup").css({"display": "none"});
    $(".form").css({"display": "none"});
});

/* Form Validation */

$(document).ready(function(){
    $(".Pop-up-box").validate({

        rules:{
 
             login:{
                 required: true,
                 minlength: 4,
                 maxlength: 16,
             },
 
             phone:{
                 required: true,
                 digits: true,
                 minlength: 6,
                 maxlength: 16,
             },
        },
 
        messages:{
 
             login:{
                 required: "Введите имя",
                 minlength: "Введите имя",
                 maxlength: "Введите имя",
             },
 
             phone:{
                 digits: "Введите телефон",
                 required: "Введите телефон",
                 minlength: "Введите телефон",
                 maxlength: "Введите телефон",
             }
 
        }
 
     });
})