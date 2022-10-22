import React from "react";

export default function WeatherData() {
  return (
    <div className="row">
      <div className="col-2">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather"
          id="weather-icon"
          className="weather-icon"
        />
      </div>
      <div className="col-10">
        <div className="text">
          Temperature: 28<span id="current-temp"></span>
          <span className="celsius">°C</span>
        </div>
        <div className="text">
          Humiditiy: 10<span id="current-humiditiy"></span>%
        </div>
        <div className="text">
          Wind speed: 7<span id="current-wind-speed"></span> mph
        </div>
      </div>
    </div>
  );
}
