$(document).ready(function(){
  if ( $( window ).width() <= 620){
    $(".hideaboutUsButton, .hideaboutUsButton1, .hideaboutUsButton2, .hideaboutUsButton3, .hideaboutUsButton4, .hideaboutUsButton5, .hideaboutUsButton6, .hideaboutUsButton7, .hideaboutUsButton8").slideUp(1);
};

var isMenuShow = false;
$(".aboutUsbutton").click(function(){
  $(".hideaboutUsButton").slideToggle();
  if (isMenuShow == false){
      isMenuShow = true;
      $(".aboutUsbutton img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow = false;
      $(".aboutUsbutton img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow1 = false;
$(".aboutUsbutton1").click(function(){
  $(".hideaboutUsButton1").slideToggle();
  if (isMenuShow1 == false){
      isMenuShow1 = true;
      $(".aboutUsbutton1 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow1 = false;
      $(".aboutUsbutton1 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow2 = false;
$(".aboutUsbutton2").click(function(){
  $(".hideaboutUsButton2").slideToggle();
  if (isMenuShow2 == false){
      isMenuShow2 = true;
      $(".aboutUsbutton2 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow2 = false;
      $(".aboutUsbutton2 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow3 = false;
$(".aboutUsbutton3").click(function(){
  $(".hideaboutUsButton3").slideToggle();
  if (isMenuShow3 == false){
      isMenuShow3 = true;
      $(".aboutUsbutton3 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow3 = false;
      $(".aboutUsbutton3 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow4 = false;
$(".aboutUsbutton4").click(function(){
  $(".hideaboutUsButton4").slideToggle();
  if (isMenuShow4 == false){
      isMenuShow4 = true;
      $(".aboutUsbutton4 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow4 = false;
      $(".aboutUsbutton4 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow5 = false;
$(".aboutUsbutton5").click(function(){
  $(".hideaboutUsButton5").slideToggle();
  if (isMenuShow5 == false){0.5
      isMenuShow5 = true;
      $(".aboutUsbutton5 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow5 = false;
      $(".aboutUsbutton5 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});0.5
var isMenuShow6 = false;
$(".aboutUsbutton6").click(function(){
  $(".hideaboutUsButton6").slideToggle();
  if (isMenuShow6 == false){
      isMenuShow6 = true;
      $(".aboutUsbutton6 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow6 = false;
      $(".aboutUsbutton6 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});
var isMenuShow7 = false;
$(".aboutUsbutton7").click(function(){
  $(".hideaboutUsButton7").slideToggle();
  if (isMenuShow7 == false){
      isMenuShow7 = true;
      $(".aboutUsbutton7 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow7 = false;
      $(".aboutUsbutton7 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});
var isMenuShow8 = false;
$(".aboutUsbutton8").click(function(){
  $(".hideaboutUsButton8").slideToggle();
  if (isMenuShow8 == false){
      isMenuShow8 = true;
      $(".aboutUsbutton8 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow8 = false;
      $(".aboutUsbutton8 img:nth-child(3)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

});