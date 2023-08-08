import getWeather from '../services/weather-service';
import './home.css';

const initializeForm = function initializeForm() {
  const searchEl = document.getElementById('location-search');
  searchEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const location = searchEl.value;
      getWeather(location).then((res) => {
        console.log(res);
      });
    }
  });
};

const initializeHome = function initializeHome() {
  initializeForm();
};

export default initializeHome;
