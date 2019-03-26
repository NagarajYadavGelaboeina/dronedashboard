import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import TemperatureSagas from './Temperature'

export default [...ApiErrors, ...WeatherSagas, ...TemperatureSagas];
