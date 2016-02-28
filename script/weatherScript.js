// IFFY (Immediately-invoked function expression) function that calls itself
// Make the code local scoped rather than global
(function(){

//Where the fuck is the api key??
// Answer here!
//wait..  i total
// Yipee Kai ae motherfucker! :D

function loadData()
{
	var cityString=$('#city').val();
	var api_key = "63d20ad154dc7f92296bf21f5d65981a";
	var weatherUrl='http://api.openweathermap.org/data/2.5/weather?q=' + cityString+ '&units=imperial&appid='+api_key;
	console.log('dataCheck' + weatherUrl);

	var output = $('#output');
	
	//if condition to check if the input condition is valid
	// if valid call the ajax
	// else alert the user.

	$.ajax({
	  url: weatherUrl,
	  type: 'GET',
	  dataType: 'json',
	  xhrFields: { withCredentials: false },
	  accept: 'application/json'
	}).done(function(data) {
		console.log("Inside Success, almost there.");
		console.log(JSON.stringify(data));
				console.log(JSON.stringify(data.weather[0].main));

				output.css("visibility","visible");

				output.html("<H3>Weather details</H3> <ul>"+
					"<li>The weather forcast for today is "+data.weather[0].main +
					"</li><li>Current Temperature is " + data.main.temp +" Fahrenheit"+
					"</li><li>Max Temperature forcasted is " + data.main.temp_max +" Fahrenheit"+
					"</li><li>Min Temperature forcasted is " + data.main.temp_min +" Fahrenheit" + "</li></ul>"
					);
	}).fail( function( xmlHttpRequest, statusText, errorThrown ) {
	  		console.log("Screwed");

	  alert(
		"Your form submission failed.\n\n"
		  + "XML Http Request: " + JSON.stringify( xmlHttpRequest )
		  + ",\nStatus Text: " + statusText
		  + ",\nError Thrown: " + errorThrown );
	});

	return false; 
};

$('#form-container').submit(loadData);


}());

