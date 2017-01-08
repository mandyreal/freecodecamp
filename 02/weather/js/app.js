$(document).ready(function() {
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
	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude;
	var city, country;

  	$.getJSON(url, function(response) {
    city    = response.results[0].address_components[2].short_name;
    country = response.results[0].address_components[3].long_name;
    lat     = response.results[0].geometry.location.lat;
    lng     = response.results[0].geometry.location.lng;
    console.log("City is    : " + city);
    console.log("Country is : " + country);
    
    $('#location').text(city + ", " + country);
    getWeather(lat, lng);
	});

function getWeather(lat, lng) {
    var url = 'https://api.darksky.net/forecast/30bc4b1802b0772391efd41af4b9859e/' + lat + ',' + lng;

	$.ajax({
       url: url,
       dataType: "jsonp",
       success: function (response) {
			var tempCelsius = Math.round((response.currently.temperature - 32) * 5 / 9 );
			var tempFahrenheit = Math.round(response.currently.temperature);
			var oddEvenCounter = 0;

			$('#icon').removeClass();
    		$('#icon').addClass('wi wi-forecast-io-' + response.currently.icon);
     		$('#temperature').text(tempFahrenheit + '  °F');
    		$('#description').text(response.currently.summary);
    		$("input").change(function() {
    			oddEvenCounter += 1;
    			if (oddEvenCounter % 2 == 1) {
    				$('#temperature').text(tempCelsius + '  °C');
    			}
    			else {
    				$('#temperature').text(tempFahrenheit + '  °F');
    			}	
    		});
       }
    });
};

};