$(document).ready(function(){
    $('.owl-one').owlCarousel({
        items: 4,
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 24.png' /></i>","<i class='arrow-right'><img src='images/next 23.png' /></i>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
                margin:-53,
                nav:false,
            },
            900:{
                items:4
            },
        },
    });

    $('.owl-two').owlCarousel({
        items: 6,
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 24.png' /></i>","<i class='arrow-right'><img src='images/next 23.png' /></i>"]

    });
    $('.owl-three').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 24.png' /></i>","<i class='arrow-right'><img src='images/next 23.png' /></i>"]

    });
    $('.owl-four').owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 2.png' /></i>","<i class='arrow-right'><img src='images/next 2(1).png' /></i>"]

    });
    $('.owl-four-formobile').owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
    });
    $(".button_play").on("click", function(){
        $('#video')[0].play();
        $('.button_play').hide();
        });
        $("#video").on("click", function(){
        $('#video')[0].pause();
        $('.button_play').show();
        });
    $('.button_bottom').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
    });


    if ( $( window ).width() <= 420){
        $(".hideThing").slideUp(1);
        $(".buttonRollList").slideUp(1);
    };
    

    $(".roll").click(function(){
        $(".hideThing").slideToggle();
        if ( $( ".roll" ).text() == "Развернуть...") {
            $( ".roll" ).text( "Свернуть..." );
          } else {
            $( ".roll" ).text( "Развернуть..." );
          };
    });
    var isMenuShow = false;
    $(".buttonRoll").click(function(){
        $(".buttonRollList").slideToggle();
        if (isMenuShow == false){
            isMenuShow = true;
            $(".triangle").css({'transition' : 'transform'+' '+ 1 +'s','transform' : 'rotate('+ -90 +'deg)'});
        } else{
            isMenuShow = false;
            $(".triangle").css({'transition' : 'transform'+' '+ 1 +'s','transform' : 'rotate('+ 0 +'deg)'});
        }
        


    });
});