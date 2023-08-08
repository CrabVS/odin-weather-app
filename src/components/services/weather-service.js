const API_KEY = '0d9d028bd7cf44ec9fe94100231107';

const getWeather = async function getWeather(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
  const responseData = await response.json();

  return responseData;
};

export default getWeather;
