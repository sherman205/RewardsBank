// File: background.js
// Author: Sophia Sherman
//
// This file works in the background to access specified airline 
// or hotel websites and scan them for certain regular expression 
// matches such as rewards points.


// Sends a request to load a webpage 

// Inputs:
// url      - String of website i.e. "http://www.united.com"
// callback - Function to send the resulting site-text to.
function sendRequest( url, callback ) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			callback(xhr.responseText);
		}
	};
	xhr.open("GET", url, true);
	xhr.send();
}

function getToken() {
	chrome.identity.getAuthToken({
    	interactive: true
	}, function(token) {
    if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
    }
    var x = new XMLHttpRequest();
    x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
    x.onload = function() {
        alert(x.response);
    };
    x.send();
});
}