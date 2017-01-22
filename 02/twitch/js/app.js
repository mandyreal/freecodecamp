var channels = ["freecodecamp"]

function callApi() {
	var url = "https://wind-bow.gomix.me/twitch-api/streams/";

	channels.forEach(function(channel){
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?", function(data) {
  			console.log(data);
	});
	});
}

$(document).ready(function() {
	callApi();
});