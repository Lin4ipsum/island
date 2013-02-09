$(document).ready(function(){
 $('.sun').mouseenter(function(){
    $(this).animate({top:'+=100px'},500);
 }); 

  $('.coconut').mouseenter(function(){
    $(this).effect('shake', 'slow');
  });

  $('.starfish').click(function(){
      $(this).toggle('explode');
  });

  $('.crab').click(function(){
    $(this).effect('shake', 'slow');
  })

});



