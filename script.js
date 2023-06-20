const weatherinfoElement = document.getElementById('weatherInfo');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const windSpeedElement = document.getElementById('windSpeed');
const feelslikeElement = document.getElementById('feelsLike');

fetch('http://api.weatherapi.com/v1/current.json?key=8d92bca6dbd4490a8a681400232006&q=London&aqi=no', {mode: 'cors'})  
   .then(function(response) {
      return response.json();
   })
   .then(function(response) {
    const temperature = response.current.temp_c;
    const condition = response.current.condition.text;
    const windSpeed = response.current.wind_kph;
    const feelsLike = response.current.feelslike_c;

    temperatureElement.textContent = "Temperature: " + temperature + "°C";
    conditionElement.textContent = "Condition: " + condition;
    windSpeedElement.textContent = "Wind Speed: " + windSpeed + " km/h"
    feelslikeElement.textContent = "Feels Like:" + feelsLike + "°C";


  weatherinfoElement.style.display = "block";
   });
 

