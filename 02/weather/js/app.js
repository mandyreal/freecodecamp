$(document).ready(function() {
	console.log("main app invoked...");
	var loc = $('#location');
	getPosition();
});

function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

function getLocation(position) {
	console.log("call to getLocation");
	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude;

	var city, country;

  	$.getJSON(url, function(response) {
    city    = response.results[0].address_components[2].short_name;
    country = response.results[0].address_components[3].long_name;
    lat     = response.results[0].geometry.location.lat;
    lng     = response.results[0].geometry.location.lng;
    $('#location').text(city + ", " + country);
    console.log("latitude : " + response.results[0].geometry.location.lat);
    console.log("longitude: " + lng);
    console.log(city + "," + country);
    getWeather(lat, lng);
	});

function getWeather(lat, lng) {
    var url = 'https://api.darksky.net/forecast/30bc4b1802b0772391efd41af4b9859e/' + lat + ',' + lng;

	$.ajax({
       url: url,
       dataType: "jsonp",
       success: function (response) {
          	console.log("call successful");
       	  	console.log("Response : " + response.currently.summary);
			console.log("Icon     : " + response.currently.icon);
			console.log("Temp     : " + response.currently.temperature);
			$('#icon').removeClass();
    		$('#icon').addClass('wi wi-forecast-io-' + response.currently.icon);
    		$('#temperature').text(response.currently.temperature + '  °F');
    		$('#description').text(response.currently.summary);
       }
    });
};

};