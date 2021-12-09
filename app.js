var weather = require('openweather-apis');
weather.setLang('es');
	weather.setCity('Colon');
  weather.setAPPID('6af629c5f1c07e7c6d3395372ef9b2d5');
  weather.setZipCode(3280);

weather.getAllWeather(function(err, JSONObj){
		console.log(JSONObj);
	});
