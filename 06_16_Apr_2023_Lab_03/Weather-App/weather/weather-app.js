import { WeatherAPI } from "./weather-api.js";

class WeatherApp{

  init(){

    const searchBoxElement 
      = document.querySelector(".search-box");

    searchBoxElement.addEventListener("keypress", 
      this.handleSearch);
    searchBoxElement.a = 'A Value';
    searchBoxElement.b = 'B Value';
    searchBoxElement.param1 = this;
  } 
  

  handleSearch(event){

    if (event.keyCode == 13 || event.key == "Enter") {
      
      const eventTarget = event.target; 
      const userData = eventTarget.value;

      const weatherAppObj = eventTarget.param1;

      const weatherAPI = new WeatherAPI(userData);
      weatherAPI.buildURL();
      weatherAPI.invoke()
        .then((response) => {

          console.log(`Response is ${JSON.stringify(response)}`);

          weatherAppObj.updateUI(response);
        });
    }
  }

  updateUI(weatherResponse){

    const cityElement = document.querySelector(".location .city")

    cityElement.innerText = `${weatherResponse.name}, ${weatherResponse.sys.country}`;

    const temperatureElement = document.querySelector(".current .temp");
    temperatureElement.innerText = `${weatherResponse.main.temp} °c`;

    const weatherElement = document.querySelector(".current .weather");
    weatherElement.innerText = `${weatherResponse.weather[0].main}`;

    const lowHighElement = document.querySelector(".current .hi-low");
    lowHighElement.innerText = `${weatherResponse.main.temp_min} °c / ${weatherResponse.main.temp_max} °c`;

    const dateElement = document.querySelector(".location .date");
    dateElement.innerText = this.formatDate();

  }

  formatDate(){

    const today = new Date();
    const dateAsString = today.toLocaleDateString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month : 'long',
      day: 'numeric'
    })

    return dateAsString;
  }

}

export {WeatherApp};