import axios from "axios";

const API_KEY = "d8e94e62b0a5ddae62c10326f3377b76";
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},tr`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
