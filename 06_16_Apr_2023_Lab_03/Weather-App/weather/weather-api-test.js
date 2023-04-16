import { WeatherAPI } from "./weather-api.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("Germany");
  weatherAPI.buildURL();
}

testBuildURL();