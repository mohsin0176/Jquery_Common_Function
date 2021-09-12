$(document).ready(function(){


$('#name').keyup(function(){

 $('#name').next().removeAttr('disabled');

 
}); 


$('#name').change(function(){

 $('#age').removeAttr('disabled');

 
}); 

});