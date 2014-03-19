$(document).ready(function() {
	$('.button').click(function() {
		var box = '<input type="checkbox"/>';

		$('.list').append('<tr><td>' + box + $('.addItems').val() + '</td></tr>');

	$('.addItems').val('');

	$('.addItems').keypress(function(e){
		if(e.which==13) {
			addItems();
			e.preventDefault();
		}
		})

}); //end of Add Items and select items
$('.removeButton').click(function() {
	$(this).remove('box: checked');
	})//remove list items



}); //end of ready

