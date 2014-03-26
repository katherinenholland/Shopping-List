$(document).ready(function() {
	$('.button').click(function() {
	var item = $('.container2').append('<a href=#><div>' + $('.addItems').val() + '</div></a>');	
		$('.addItems').val('');
		$(item).click(function() {
			$(this).toggleClass('complete');
}); //end of toggle list items


$('.removeButton').click(function() {
	$('.complete').remove();
});//end remove list items

}); //end of Add Items and select items

}); //end of ready



