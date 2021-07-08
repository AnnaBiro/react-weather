import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

import Weatherinfo from "./Weatherinfo";

export default function Weather(props){
  
  const [weatherData,setWeatherData] = useState({ready: false});
  const [city,setCity] = useState(props.defaultCity);
  function handleResponse(response){
    
    setWeatherData({
      ready: true,
      temperature:response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description ,
      icon: response.data.weather[0].icon,
      
    }
      );
   
  }

  function Search(){
    const apiKey = "0dbcd93086477c1a7e773d46c9357657";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  

  function handleSubmit(event){
    event.preventDefault();
    Search();
  }

  function handleCityChange(event){
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
          </div>
          <div className="col-3">
             <input type="submit" value="Search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
      <Weatherinfo data={weatherData}/>
      
     </div>
  );
  }

  else {
    
    Search();
    return "Loading..."
  
  }

 
}