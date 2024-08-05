document.addEventListener('DOMContentLoaded', () => {
  const apiKey = 'daeffeaff5706ff8a03de5ba9bf73966';
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
      fetchWeatherData(city, apiKey);
      fetchForecastData(city, apiKey);
    }
  });
});

function fetchWeatherData(city, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        console.error('Error fetching the weather data:', data.message);
      } else {
        console.log(data); 
        displayWeather(data);
      }
    })
    .catch(error => console.error('Error fetching the weather data:', error));
}

function fetchForecastData(city, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      displayForecast(data);
    })
    .catch(error => console.error('Error fetching the forecast data:', error));
}

function displayWeather(data) {
  const temperatureElement = document.getElementById('temperature');
  const conditionElement = document.getElementById('condition');
  const cityElement = document.getElementById('city');
  const iconElement = document.createElement('img');

  temperatureElement.textContent = data.main.temp;
  conditionElement.textContent = data.weather[0].description;
  cityElement.textContent = `City: ${data.name}`;

  iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  iconElement.alt = data.weather[0].description;
  iconElement.classList.add('weather-icon');

  const weatherInfo = document.querySelector('.weather-info');
  weatherInfo.appendChild(iconElement);
}

function displayForecast(data) {
  const forecastContainer = document.getElementById('forecast');
  forecastContainer.innerHTML = ''; 

  const dailyForecasts = data.list.filter((entry, index) => index % 8 === 0);

  dailyForecasts.forEach(forecast => {
    const date = new Date(forecast.dt_txt).toLocaleDateString();
    const temperature = forecast.main.temp;
    const condition = forecast.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');
    forecastItem.innerHTML = `
      <p><strong>Date:</strong> ${date}</p>
      <img src="${icon}" alt="${condition}" class="forecast-icon">
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;

    forecastContainer.appendChild(forecastItem);
  });
}
