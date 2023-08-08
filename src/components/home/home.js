import getWeather from '../services/weather-service';
import './home.css';

const getInfoElements = function getInfoElements() {
  const infoElements = {
    conditionIcon: document.getElementById('info-icon'),
    condition: document.getElementById('info-condition'),
    location: document.getElementById('info-location'),
    wind: document.getElementById('info-wind'),
    humidity: document.getElementById('info-humidity'),
  };

  return infoElements;
};

const updatePage = function updatePageInformation(weatherData) {
  const infoElements = getInfoElements();

  infoElements.conditionIcon.src = weatherData.condition.icon;
  infoElements.condition.textContent = weatherData.condition.text;
  infoElements.location.textContent = `${weatherData.location} ${weatherData.tempC}°C`;
  infoElements.wind.textContent = `Wind: ${weatherData.windKph}`;
  infoElements.humidity.textContent = `Humidity: ${weatherData.humidity}`;
};

const initializeForm = function initializeForm() {
  const searchEl = document.getElementById('location-search');
  searchEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const location = searchEl.value;
      getWeather(location).then((res) => {
        updatePage(res);
      });
    }
  });
};

const initializeHome = function initializeHome() {
  initializeForm();
};

export default initializeHome;
