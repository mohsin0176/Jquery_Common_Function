$(document).ready(function(){


 $('#name').bind('click',function(){

 	$('#name1').html('Enter Your Name');

 });

  $('#age').bind('click',function(){

 	$('#age1').html('Enter Your Age');

 });



   $('#name').bind('focusout',function(){

 	$('#name1').html(' ');

 });

  $('#age').bind('focusout',function(){

 	$('#age1').html(' ');

 });

});