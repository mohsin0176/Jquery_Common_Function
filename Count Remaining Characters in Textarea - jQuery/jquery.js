$(document).ready(function(){

$('#message').keyup(function(){

	var max_text=50;
	$('#feedback').html(max_text+"Characters remaining");
	var text_length=$('#message').val().length;
	var remaining=max_text-text_length;
	$('#feedback').html(remaining+"Characters remaining");

});

});