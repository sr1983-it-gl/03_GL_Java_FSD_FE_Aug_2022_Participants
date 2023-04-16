import { WeatherAPI } from "./weather-api.js";

class WeatherApp{

  init(){

    const searchBoxElement 
      = document.querySelector(".search-box");

    searchBoxElement.addEventListener("keypress", 
      this.handleSearch);
  } 
  

  handleSearch(event){

    if (event.keyCode == 13 || event.key == "Enter") {
      
      const eventTarget = event.target; 
      const userData = eventTarget.value;

      const weatherAPI = new WeatherAPI(userData);
      weatherAPI.buildURL();
      weatherAPI.invoke()
        .then((response) => {

          console.log(`Response is ${JSON.stringify(response)}`);
        });
    }
  }
}

export {WeatherApp};