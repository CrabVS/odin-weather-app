import './reset.css';
import './style.css';
import getWeather from './components/services/weather-service';

getWeather('london').then((res) => { console.log(res); });
