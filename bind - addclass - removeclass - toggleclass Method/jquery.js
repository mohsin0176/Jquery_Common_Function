$(document).ready(function(){


  

  $('#message').mouseenter(function(){
    
	$('#message').addClass('greenBackground');

   });

  $('#message').mouseleave(function(){

  $('#message').removeClass('greenBackground');

								
  });

  

	$('#message').bind('mouseenter',function(){
    
	$('#message').addClass('greenBackground');

   	}).bind('mouseleave',function(){

  	$('#message').removeClass('greenBackground');
	});

  

});