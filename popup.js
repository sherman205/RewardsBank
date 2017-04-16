// Used by "popup.html" to alter the states 
// of the elements of that page

function switchTabs() {
	$("#tabs li").click(function() {
		$("#tabs li").removeClass('active');
		$(this).addClass('active');
		$(".tabContent").hide();
		var selectedTab = $(this).find("a").attr("href");
		$(selectedTab).fadeIn();
		return false;
	});
}

function init() {
	$(".tabContent").hide();
	switchTabs();

	var tbody = $("#accounts tbody");
	if (tbody.children().length == 0) {
		$('#accounts').find(tbody).append("<tr><td colspan='4'>Uh oh! \
			Click 'Actions' to add an account!</td></tr>");
		//$('#accounts').find(tbody).append("<tr><td>1</td><td>United</td></tr>");
		//$('#content').html('Add an account!');
	}
	else {
		$('#content').html('blah');
	}
}

document.addEventListener('DOMContentLoaded', init);