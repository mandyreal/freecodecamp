var channels = ["freecodecamp","ESL_SC2","measdfasd"]

function callApi() {
	var url = "https://wind-bow.gomix.me/twitch-api/streams/";

	channels.forEach(function(channel){
		// get channel status
		$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?", function(data) {
  			console.log(channel + ":");
  			console.log(data.stream);
		});
		// get channel details
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?", function(data) {
  			console.log(data);
  			console.log("=====");
		});

	});
}

$(document).ready(function() {
	callApi();
});