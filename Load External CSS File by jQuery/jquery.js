$(document).ready(function(){


$(':submit').click(function(){
$('#text p:even').css({"background-color":"gray","font-size":"30px","color":"green","text-align":"justify",});
$('#text p:odd').css({"background-color":"green","font-size":"30px","color":"red","text-align":"justify",});
});


$(':input').click(function(){
$('#para p:even').addClass('grayBackground');
$('#para p:odd').addClass('blackBackground'); 
});

 

});