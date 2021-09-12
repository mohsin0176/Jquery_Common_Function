$(document).ready(function(){


$(':input').click(function(){
$('p:first').text("First Paragraph Changed");
$('#second').text("Second Paragraph Changed");
$('#third').text("Third Paragraph Changed");
$('p:last').text("Last Paragraph Changed");
});
$(':submit').click(function(){
$('p:first').text("First Paragraph Changed");
$('#second').text("Second Paragraph Changed");
$('#third').text("Third Paragraph Changed");
$('p:last').text("Last Paragraph Changed");
});
$(':button').click(function(){
$('p:first').text("First Paragraph Changed");
$('#second').text("Second Paragraph Changed");
$('#third').text("Third Paragraph Changed");
$('p:last').text("Last Paragraph Changed");
});
$('#change').click(function(){
$('p:first').text("First Paragraph Changed");
$('#second').text("Second Paragraph Changed");
$('#third').text("Third Paragraph Changed");
$('p:last').text("Last Paragraph Changed");
});

});