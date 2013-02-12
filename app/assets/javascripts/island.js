$(document).ready(function(){
 $('.sun').mouseenter(function(){
    $(this).animate({top:'+=100px'},500);
 }); 

  $('.coconut').mouseenter(function(){
    $(this).effect('shake', 'slow');
  });

  $('.starfish').click(function(){
      $(this).attr("src","http://bbsimg.ngfiles.com/14/24482000/ngbbs511598d167806.gif").hide(1500);
  });

  $('.crab').click(function(){
    $(this).effect('shake', 'slow');
  });

  $('.boat').toggle('fade', 8000);

})



