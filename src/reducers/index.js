import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";

const rootReducer = combineReducers({
  WeatherReducer: WeatherReducer
});

export default rootReducer;
