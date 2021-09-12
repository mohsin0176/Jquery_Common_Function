$(document).ready(function(){




$('#text').scroll(function(){


	 var scroll_pos=$('#text').scrollTop();
 $('#message').html("Your Scrolled Position is :"+scroll_pos);

});



});