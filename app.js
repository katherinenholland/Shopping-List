$(document).ready(function() {
	$('.button').click(function() {
		//var box = '<input type="checkbox"/>';

		$('.container2').append('<a href=#><div>' + $('.addItems').val() + '</div></a>');

		//$('.list').append('<tr><td>' + box + $('.addItems').val() + '</td></tr>');

	//'box' is our newly created checkbox
	//let's bind the click event handler with an unnamed function
	//$(box).click(function() {
		//$(this).closest('tr').toggle('.complete');
		//$(this).closest('tr').bind();
		//todo: toggle 'completed' class of the TR(parent parent element of this)
	//})

	$('.addItems').val('');

	$('a').click(function() {
		$(this).toggleClass('complete');
})
   
}); //end of Add Items and select items



//$('input[type="checkbox"]').click(function() {
	//$(this).closest('tr').toggle('.complete');
//})
$('.removeButton').click(function() {
	$('.complete').remove();
});
//$('.removeButton').click(function() {
	//alert('yes');
	//$('label:checked').remove();
	//})//remove list items



}); //end of ready

