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
	$("#tab1").show();
	switchTabs();

	var airlinebody = $("#airlines tbody");
	var hotelbody = $("#hotels tbody");
	if (airlinebody.children().length == 0) {
		$('#airlines').find(airlinebody).append("<tr><td colspan='4'>Uh oh! \
			Click 'Actions' to add an account!</td></tr>");
		//$('#accounts').find(tbody).append("<tr><td>1</td><td>United</td></tr>");
	}
	if (hotelbody.children().length == 0) {
		$('#hotels').find(hotelbody).append("<tr><td colspan='4'>Uh oh! \
			Click 'Actions' to add an account!</td></tr>");
		//$('#accounts').find(tbody).append("<tr><td>1</td><td>United</td></tr>");
	}
	else {
		$('#content').html('blah');
	}
}

document.addEventListener('DOMContentLoaded', init);