import React, { useState } from "react";
import "../styles/Weather.css";

const Weather = () => {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [btnClicked, setBtnClicked] = useState(false);

  const fetchWeather = async () => {
    const ATL =
      "https://api.weatherapi.com/v1/current.json?key=7b7c52b40cd14ec1b02185940230610&q=Atlanta&aqi=no";
    const response = await fetch(ATL);
    const data = await response.json();
    console.log(data);
    console.log(data.current.temp_f);
    setCurrentTemp(data.current.temp_f);
    setBtnClicked(true);
    hideBtn()
  };

  const hideBtn = () => {
    let weatherBtn = document.getElementById('watherbtn')
    weatherBtn.style.display = 'none'
    

  }

  return (
    <div id="currentWeather">
      <button id="watherbtn" onClick={fetchWeather} >Current Weather</button>

      {btnClicked && (
        <>
          <h5>Weather</h5>
          <h6>
            <b>{currentTemp}°F</b>
          </h6>
        </>
      )}

    </div>
  );
};

export default Weather;
