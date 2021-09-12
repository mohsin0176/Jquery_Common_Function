$(document).ready(function(){

$('#message1').toggle('slow');
$('#message2').toggle('hide');

var value1=$('#Toggle_message1').attr('value');
var value2=$('#Toggle_message2').attr('value');

$('#Toggle_message1').click(function(){

	if (value1=='Hide') 
	{
       $('#Toggle_message1').attr('value','Show');
       $('#message1').show();
	}
	else 
	{
       $('#Toggle_message1').attr('value','Hide');
       $('#message1').hide();
	}

});
$('#Toggle_message2').click(function(){
	
	if (value2=='Show') 
	{
        $('#Toggle_message2').attr('value','Hide');
        $('#message2').hide();
	}
	else if (value2=='Hide') 
	{
        $('#Toggle_message2').attr('value','Show');
        $('#message2').show();
	}
});

 

});