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

  $('#nabetrigger').dblclick(function(){
    $('#nabe').fadeIn();
  });





});


