$(document).ready(function(){


$('#form').bind('submit',function(){

 
var email=$('#email_id').val();
$('#showemail').html(email);
 
}); 

});