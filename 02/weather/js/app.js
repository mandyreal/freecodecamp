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
    $('#location').text(city + ", " + country);
    console.log(city + "," + country);
    getWeather(city, country);
	});

function getWeather(city, country) {
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country +'&appid=e4c8a9da719d414b907f7a31035009b1&units=metric';
//	var url = 'http://api.openweathermap.org/data/2.5/weather?q=New York,USA&appid=e4c8a9da719d414b907f7a31035009b1&units=metric';  	

  	$.getJSON(url, function(response) {
  	var hr = (new Date()).getHours(); 
  	var day_night;
  	if (hr >= 5 && hr <= 17) {
  		day_night = "day-"
  	} else {
  		day_night = "night-"
  	};
  	console.log("Hour of day : " + hr + " " + day_night);	
  	console.log("OWM icon : " + response.weather[0].id);
    $('#icon').removeClass();
    $('#icon').addClass('wi wi-owm-' + day_night + response.weather[0].id);
//	$('#icon').addClass('wi wi-night-clear');
	console.log("OWM temp : " + response.main.temp);
	console.log("OWM desc : " + response.weather[0].description);
    $('#temperature').text(response.main.temp + '  °C');
    $('#description').text(response.weather[0].description);
	});
};

};