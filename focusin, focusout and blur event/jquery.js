$(document).ready(function(){

$(':input').focusin(function(){

  $(this).css('background-color','gray');
 });

 $(':input').focusout(function(){

  $(this).css('background-color','green');
 });
 $(':text').focusin(function(){

  $(this).css('background-color','gray');
 });

 $(':text').focusout(function(){

  $(this).css('background-color','green');
 });
 $(':password').focusin(function(){

  $(this).css('background-color','gray');
 });

 $(':password').focusout(function(){

  $(this).css('background-color','green');
 });

 $(':input').focusin(function(){

  $(this).css('background-color','gray');
 });

 $(':input').blur(function(){

  $(this).css('background-color','green');
 });

});