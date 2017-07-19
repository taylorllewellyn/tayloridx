console.log('jQuery: %o', jQuery);

(function() {
	 return apiKey="98e4f6b6cf674f62b80220305171807"
})();

$(document).ready(function() {
	var viewData = {
		apiKey: "98e4f6b6cf674f62b80220305171807", // not used in api request
		init: function() {
			console.log(this.apiKey);
			$('.view-data').on('click', 'button', this.loadData);
		},
		loadData: function() {
			$.ajax('https://api.apixu.com/v1/forecast.json', {
				success: function(response) {
					$('div#precip_in').empty().append('Precipitation: ' + response.current.precip_in);
					$('div#wind').empty().append('Wind: ' + response.current.wind_mph);
					var arrayForecastMaxTemp = []
					var arrayForecastMaxTemp = []
		            console.log(response);
		            window._localWeather = response;
		            Object.keys(response.forecast.forecastday).forEach(function(key,index) {
//				    	console.log('key: %s -> index: %s', key, index)

						arrayForcastMaxTempDay = []
						arrayForecastMaxTemp.push([response.forecast.forecastday[key].date, 
							response.forecast.forecastday[key].day.maxtemp_f]);

							      google.charts.setOnLoadCallback(drawChart);

	      function drawChart() {

	        // Create the data table.
	        var data = new google.visualization.DataTable();
	        data.addColumn('string', 'date');
	        data.addColumn('number', 'Temperature');
	        data.addRows(arrayForecastMaxTemp);

	        // Set chart options
	        var options = {'title':'Forcast for High Temperatures in Eugene',
	                       'width':800,
	                       'height':300};

	        // Instantiate and draw our chart, passing in some options.
	        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	        chart.draw(data, options);
//	        console.log(data)
	      }

						


					});
				},
				error: function(request, errorType, errorMessage) {
					alert('Error: ' + errorType + ' with message: ' + errorMessage);
				},
				timeout: 3000,
				data: {key: apiKey, q: "Eugene", days: 10}
			});
		},
	};
	viewData.init();
});

//Object.keys(test).forEach(function(key,index) {
//    console.log('key: %s -> index: %s', key, index)
//	console.log(test[key])
//});