var channels = ["ESL_SC2","freecodecamp","measdfasd","OgamingSC2","cretetion","habathcx", "RobotCaleb", "noobs2ninjas","Reckful", "noobs2ninjas",
	"sodapoppin","ProLeagueCSGO","C9Sneaky","YoDa",
	"reynad27","LIRIK","ESL_BiDa"]

function callApi() {
	channels.forEach(function(channel){
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?", function(data) {
  		jsonController(data, channel)
		});
	});
}

function jsonController(data, channel) {
    if (data.hasOwnProperty('stream') && data.stream === null) {
      	// user is not found or not streaming
    	var url = "https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?"; 
      	var accountName = "<span class=\"account-name\">" + channel + "</span>";
  
  		$.getJSON(url, function(data) {
            if (data.hasOwnProperty('error')) {
            // user is not not 
	    		var icon = "<img class=\"logo\" src=\"http://placehold.it/100x100\" />"; 
  				var accountName = "<span class=\"account-name\">" + channel + "</span>";
  				var text = "<div class=\"not-found\">" + icon + data.message + "</div>";
	    		$('#all').append(text);
	    	} else {
	    	// user is not streaming 
	    	var icon = "<img class=\"logo\" src=\"" + data.logo + "\"/>";
	    	var accountName = "<span class=\"account-name\">" + channel + "</span>";
    		var text = "<div class=\"not-streaming\">" + icon + accountName + " : not streaming</div>";
	  		$('#3a').append(text);
	  		$('#all').append(text);
	  		}
	  	});
    } else if (data.hasOwnProperty('stream') && data.stream !== null){
	    // user is online and streaming
		var icon = "<img class=\"logo\" src=\"" + data.stream.channel.logo + "\"/>";
  		var accountName = "<span class=\"account-name\">" + channel + "</span>";
  		var streamURL = data.stream.channel.url;
  		var streamTitle = data.stream.channel.status;
  		var streamLink = "<a href=\"" + streamURL + "\"" + "target=\"blank\">" + streamTitle + "</a>"; 
  		var text = "<div class=\"streaming\">" + icon + accountName + " :  " + streamLink + "</div>";
 		$('#2a').append(text);
		$('#all').append(text);
    } 
}

$(document).ready(function() {
	callApi();
});