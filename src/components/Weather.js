import React, { useState } from "react";
import '../styles/Weather.css'

const Weather = () => {
  const [currentTemp, setCurrentTemp] = useState(null);

  const fetchWeather = async () => {
    const ATL =
      "http://api.weatherapi.com/v1/current.json?key=7b7c52b40cd14ec1b02185940230610&q=Atlanta&aqi=no";
    const response = await fetch(ATL);
    const data = await response.json();
    console.log(data);
    console.log(data.current.temp_f)
    setCurrentTemp(data.current.temp_f)
  };

  return (
    <div id="currentWeather">
      <h5>Weather</h5>
      <h6><b>{currentTemp}°F</b></h6>
      <button onClick={fetchWeather}>Current Weather</button>
    </div>
  );
};

export default Weather;
