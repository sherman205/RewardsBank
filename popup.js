// Used by "popup.html" to alter the states 
// of the elements of that page


// Changes the views of the app when clicking on different tabs
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

function createAirlinesDropDown() {
	var airlines = ['American', 'Delta', 'Lufthansa', 'United', 'Virgin Atlantic'];
	select = document.getElementById('sel1');
	for (var i = 0; i < airlines.length; i++) {
		var opt = document.createElement('option');
		opt.value = airlines[i];
		opt.innerHTML = airlines[i];
		select.appendChild(opt);
	}
}

function addAirlineAccount() {
    $('#airlineForm').submit(function (e) {
    	e.preventDefault();
    	var values = {};
    	$.each($('#airlineForm').serializeArray(), function(i, field) {
    		values[field.name] = field.value;
    	});
    	console.log(values);
    	$('#airlines').find('tbody').append("<tr><td>1</td><td>"+ Object.values(values)[0] +"</td><td>"+ Object.values(values)[1] +"</td></tr>");
    	$('#airlineForm').trigger("reset");
    	$('#airlineModal').modal('hide');
    	$('#airlines').show();	
    });
}



// Called when "popup.html" is finished loading. 
// Loads updated account information 
function init() {
	$(".tabContent").hide();
	$("#tab1").show();
	switchTabs();
	//$("#addAccountButton").click(function() {
	//	$(this).hide();
	//});

	var airlinebody = $("#airlines tbody");
	var hotelbody = $("#hotels tbody");
	if (airlinebody.children().length == 0) {
		//$('#airlines').find(airlinebody).append("<tr><td colspan='4'>Uh oh! \
		//	Click 'Actions' to add an account!</td></tr>");
		//$('#accounts').find(tbody).append("<tr><td>1</td><td>United</td></tr>");
	}
	if (hotelbody.children().length == 0) {
		//$('#hotels').find(hotelbody).append("<tr><td colspan='4'>Uh oh! \
		//	Click 'Actions' to add an account!</td></tr>");
		//$('#accounts').find(tbody).append("<tr><td>1</td><td>United</td></tr>");
		$("#addAccountButton").show();
	}
	else {
		$('#content').html('blah');
	}
	createAirlinesDropDown();
	addAirlineAccount();
}

document.addEventListener('DOMContentLoaded', init);