$(document).ready(function(){
 $('.sun').mouseenter(function(){
    $(this).animate({top:'+=100px'},500);
 }); 
});

$(document).ready(function(){
  $('.coconut').mouseenter(function(){
    $(this).effect('shake', 'slow');
  })
});