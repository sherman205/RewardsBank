// Used by "popup.html" to alter the states 
// of the elements of that page

function init() {
	var tbody = $("#accounts tbody");
	if (tbody.children().length == 0) {
		$('#accounts').find(tbody).append("<tr><td colspan='4'>Add an account!</td></tr>");
		//$('#accounts').find(tbody).append("<tr><td>1</td><td>United</td></tr>");
		//$('#content').html('Add an account!');
	}
	else {
		$('#content').html('blah');
	}
	
}

document.addEventListener('DOMContentLoaded', init);