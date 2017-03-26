$(document).ready(function(){

	$('#submit').click(function(){
		var city = $("#city").val();

		if(city!= '')
		{
			$.ajax(
			{
				url : 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c3d94d36dbd2e044963226d6a1e25edd" ,
				type : "GET",
				dataType: "jsonp" ,
				success : function(data)
				{
					alert(show(data));
				}
			});
		}
		else
		{
			alert("Please Enter A City");
		}


	});

});

function show(data)
{
	return 	"Current Weather for " + data.name + ", " + data.sys.country+"\n\n"+
			"Weather : "+ data.weather[0].main + "\n\n" +
			"Description : "+ data.weather[0].description +"\n\n" + 
			"Temperature : "+ data.main.temp +" ℃\n\n" +
			"Pressure : "+ data.main.pressure +"\n\n" + 
			"Humidity : "+ data.main.humidity +"\n\n" + 
			"Minimum Temperature : "+ data.main.temp_min +" ℃\n\n" + 
			"Maximum Temperature : "+ data.main.temp_max +" ℃\n\n" + 
			"Wind Speed : "+ data.wind.speed +"kmph\n\n" + 
			"Wind Direction : "+ data.wind.deg +"\n";
}