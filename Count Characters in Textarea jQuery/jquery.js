$(document).ready(function(){


$('#message1').keyup(function(){
var word1=$('#message1').val();
$('#feedback1').html(word1);
});
 
$('#message2').keyup(function(){
var word2=$('#message2').val();
$('#feedback2').text(word2);
});
 

 

});