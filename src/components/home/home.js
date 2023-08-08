import getWeather from '../services/weather-service';
import './home.css';

let currentLocation;
let currentDeg = 'C';
let currentSpeed = 'KpH';

const disableButtons = function disableButtons() {
  const meassureButtons = document.querySelectorAll('#data-button-group .btn');

  meassureButtons[0].disabled = true;
  meassureButtons[1].disabled = true;
};

const disableElements = function disableElements() {
  const searchEl = document.getElementById('location-search');

  searchEl.disabled = true;
  disableButtons();
};

const enableElements = function enableElements() {
  const searchEl = document.getElementById('location-search');
  const meassureButtons = document.querySelectorAll('#data-button-group .btn');

  searchEl.disabled = false;
  meassureButtons[0].disabled = false;
  meassureButtons[1].disabled = false;
};

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

const clearDisplay = function clearDisplay() {
  const infoElements = getInfoElements();

  infoElements.conditionIcon.src = '';
  infoElements.conditionIcon.alt = '';
  infoElements.condition.textContent = '';
  infoElements.location.textContent = '';
  infoElements.wind.textContent = '';
  infoElements.humidity.textContent = '';
};

const updatePage = function updatePageInformation(weatherData) {
  const infoElements = getInfoElements();

  infoElements.conditionIcon.src = weatherData.condition.icon;
  infoElements.conditionIcon.alt = 'weather icon';
  infoElements.condition.textContent = weatherData.condition.text;
  infoElements.location.textContent = `${weatherData.location} ${getDegrees(weatherData)}°${currentDeg}`;
  infoElements.wind.textContent = `Wind: ${getSpeed(weatherData)} ${currentSpeed}`;
  infoElements.humidity.textContent = `Humidity: ${weatherData.humidity}`;
};

const showLoading = function showLoading() {
  clearDisplay();
};

const fetchData = async function fetchData(location) {
  showLoading();
  const weatherData = await getWeather(location);
  updatePage(weatherData);
  currentLocation = weatherData.location;
  enableElements();
};

const initializeForm = function initializeForm() {
  const searchEl = document.getElementById('location-search');
  searchEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      disableElements();

      const location = searchEl.value;
      searchEl.value = '';
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
    disableElements();
    fetchData(currentLocation);
  });

  meassureButtons[1].addEventListener('click', () => {
    const altSpeed = currentSpeed === 'KpH' ? 'MpH' : 'KpH';
    meassureButtons[1].textContent = `To ${currentSpeed}`;

    currentSpeed = altSpeed;
    disableElements();
    fetchData(currentLocation);
  });
};

const initializeHome = function initializeHome() {
  initializeForm();
  initializeButtons();
  clearDisplay();
  disableButtons();
};

export default initializeHome;
