$(document).ready(function() {
	$('.button').click(function() {
		var box = '<input type="checkbox"/>';

		$('.list').append('<tr><td>' + box + $('.addItems').val() + '</td></tr>');

	$('.addItems').val('');

	$('.addItems').keypress(function(e){
		if(e.which==13){
			addItem();
			e.preventDefault();
		}
		})

}); //end of Add Items and select items
$('.removeButton').click(function() {
	$('box:checked').remove();
	})//remove list items



}); //end of ready

