const weatherinfoElement = document.getElementById('weatherInfo');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const windSpeedElement = document.getElementById('windSpeed');
const feelslikeElement = document.getElementById('feelsLike');

const searchBarElement = document.getElementById('searchBar');
const img = document.querySelector('img');

function fetchWeatherData(city) {
   const url = 'http://api.weatherapi.com/v1/current.json?key=8d92bca6dbd4490a8a681400232006&q=' + city + '&aqi=no';

   fetch(url, {mode: 'cors'})  
      .then(function(response) {
         return response.json();
      })
      .then(function(response) {
         const location = response.location.name + ',' + response.location.country;
         const temperature = response.current.temp_c;
         const condition = response.current.condition.text;
         const windSpeed = response.current.wind_kph;
         const feelsLike = response.current.feelslike_c;

         locationElement.textContent = "Location: " + location;
         temperatureElement.textContent = "Temperature: " + temperature + "°C";
         conditionElement.textContent = "Condition: " + condition;
         windSpeedElement.textContent = "Wind Speed: " + windSpeed + " km/h";
         feelslikeElement.textContent = "Feels Like: " + feelsLike + "°C";
      })
      .catch(function(error) {
         console.log('Error fetching weather data:', error);
      });

   reloadImage(); // Reload the image
}

function reloadImage() {
   const city = searchBarElement.value;
   const imageSearch = 'weather ' + city;
   fetch('https://api.giphy.com/v1/gifs/translate?api_key=6at0ALX5nBJrBb3nl8JPwAiksi5H30ix&s=' + imageSearch, {mode: 'cors'})
      .then(function(response) {
         return response.json();
      })
      .then(function(response) {
         img.src = response.data.images.original.url;
      })
      .catch(function(error) {
         console.log('Error fetching image:', error);
      });
}

fetchWeatherData('London');

searchBarElement.addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
      const city = searchBarElement.value;
      fetchWeatherData(city);
   }
});

searchBarElement.addEventListener('focus', function() {
   searchBarElement.value = '';
});
