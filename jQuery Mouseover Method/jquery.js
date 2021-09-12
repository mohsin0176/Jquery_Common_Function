$(document).ready(function(){


$('#message').bind('mouseover',function(){

 
 $('#message').addClass('red')

 
}).bind('mouseout',function(){

	$('#message').css({"background-color":"yellow","font-size":"200px"});

});

});