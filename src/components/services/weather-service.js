const API_KEY = '0d9d028bd7cf44ec9fe94100231107';

const sortWeatherData = async function sortWeatherData(weatherData) {
  const sortedData = {
    location: weatherData.location.name,
    windKpH: weatherData.current.wind_kph,
    windMpH: weatherData.current.wind_mph,
    humidity: weatherData.current.humidity,
    tempC: weatherData.current.temp_c,
    tempF: weatherData.current.temp_f,
    condition: weatherData.current.condition,
  };

  return sortedData;
};

const getWeather = async function getWeather(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    const responseData = await response.json();
    const weatherData = sortWeatherData(responseData);

    return weatherData;
  } catch (errorRes) {
    return errorRes;
  }
};

export default getWeather;
