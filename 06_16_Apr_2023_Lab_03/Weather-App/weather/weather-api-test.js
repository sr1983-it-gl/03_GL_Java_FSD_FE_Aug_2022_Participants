import { WeatherAPI } from "./weather-api.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("Germany");
  weatherAPI.buildURL();
}

async function testInvoke(){

  const weatherAPI = new WeatherAPI("Germany");
  weatherAPI.buildURL();

  const responseInJSON = await weatherAPI.invoke();
  console.log(responseInJSON);

}

// testBuildURL();

testInvoke();