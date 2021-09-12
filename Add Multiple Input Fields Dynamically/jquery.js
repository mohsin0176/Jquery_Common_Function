$(document).ready(function(){


$('#name').focusin(function(){

$('#name').before('<p>Enter Information</p><br>Name:') 
$('#name').after('<br>Age:<input type="text" name="age" id="age"><br>Email:<input type="text" name="email" id="email">')

 
}); 

});