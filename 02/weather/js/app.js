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
    city = response.results[0].address_components[2].short_name;
    country = response.results[0].address_components[3].long_name;
    $('#location').attr('value', city + ", " + country);
    console.log(city + "," + country);
	});

};