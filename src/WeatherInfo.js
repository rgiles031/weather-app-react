import React from "react";
import FormatTime from "./formatTime";
import "./WeatherInfo.css";

export default function weatherInfo(props) {
  return (
    <div>
      {" "}
      <h1>{props.data.cityName}</h1>
      <FormatTime />
      <div className="row">
        <div className="col-2">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="weather"
            id="weather-icon"
            className="weather-icon"
          />
        </div>
        <div className="col-10">
          <div className="description">{props.data.description}</div>
          <div className="text">
            Temperature: {Math.round(props.data.temp)}°C
          </div>
          <div className="text">Humiditiy: {props.data.humidity}%</div>
          <div className="text">
            Wind speed: {Math.round(props.data.wind)} mph
          </div>
        </div>
      </div>
    </div>
  );
}
