import getWeather from '../services/weather-service';
import './home.css';

let currentLocation;
let currentDeg = 'C';
let currentSpeed = 'KpH';

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

const getDegrees = function getDegrees(weatherData) {
  return weatherData[`temp${currentDeg}`];
};

const getSpeed = function getSpeed(weatherData) {
  return weatherData[`wind${currentSpeed}`];
};

const updatePage = function updatePageInformation(weatherData) {
  const infoElements = getInfoElements();

  infoElements.conditionIcon.src = weatherData.condition.icon;
  infoElements.condition.textContent = weatherData.condition.text;
  infoElements.location.textContent = `${weatherData.location} ${getDegrees(weatherData)}°${currentDeg}`;
  infoElements.wind.textContent = `Wind: ${getSpeed(weatherData)} ${currentSpeed}`;
  infoElements.humidity.textContent = `Humidity: ${weatherData.humidity}`;
};

const fetchData = async function fetchData(location) {
  const weatherData = await getWeather(location);
  updatePage(weatherData);
  currentLocation = weatherData.location;
};

const initializeForm = function initializeForm() {
  const searchEl = document.getElementById('location-search');
  searchEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const location = searchEl.value;
      fetchData(location);
    }
  });
};

const initializeButtons = function initializeButtons() {
  const meassureButtons = document.querySelectorAll('#data-button-group .btn');

  meassureButtons[0].addEventListener('click', () => {
    const altDeg = currentDeg === 'C' ? 'F' : 'C';
    meassureButtons[0].textContent = `To °${currentDeg}`;

    currentDeg = altDeg;
    fetchData(currentLocation);
  });

  meassureButtons[1].addEventListener('click', () => {
    const altSpeed = currentSpeed === 'KpH' ? 'MpH' : 'KpH';
    meassureButtons[1].textContent = `To ${altSpeed}`;

    currentSpeed = altSpeed;
    fetchData(currentLocation);
  });
};

const initializeHome = function initializeHome() {
  initializeForm();
  initializeButtons();
};

export default initializeHome;
