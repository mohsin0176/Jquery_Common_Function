$(document).ready(function(){


 $('#list').bind('change',function(){


 	var list=$(this).val();
 	$('#feedback').html(list);

 });

});