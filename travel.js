$(function() {



  $('#fukitrigger').click(function(){
    $('#biggestfuki').fadeIn();
  });



  $('#biggestfuki').click(function(){
    $('#fuki').show();
  });

  $('#biggestfuki').click(function(){
    $(this).fadeOut();
  });

  $('#fukitrigger').click(function(){
    $('#fuki').fadeOut();
  });

  $('#nabetrigger').click(function(){
    $('#nabe').fadeIn();
  });

  // ここからメニュー
  $('#bar').click(function(){
    $('#menu').slideDown();
  });

  $('#bar').click(function(){
    $(this).fadeOut();
  });

  $('#batsu').click(function(){
    $('#menu').slideUp();
  });



  $('#batsu').click(function(){
    $('#bar').fadeIn();
  });

// ここまでメニュー

$('h1').hide().fadeIn('slow');




});


