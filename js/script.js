$(document).ready(function(){
    $('.owl-one').owlCarousel({
        items: 4,
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 24.png' /></i>","<i class='arrow-right'><img src='images/next 23.png' /></i>"]
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
    $(".button_play").on("click", function(){
        $('#video')[0].play();
        $('.button_play').hide();
        });
        $("#video").on("click", function(){
        $('#video')[0].pause();
        $('.button_play').show();
        });
});