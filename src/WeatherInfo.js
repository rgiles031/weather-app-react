import React, { useState } from "react";
import FormatTime from "./formatTime";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  let [unit, setUnit] = useState("celcius");

  function celcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
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
              Temperature: {Math.round(props.data.temp)}°C |{" "}
              <a href="/" onClick={fahrenheit}>
                °F
              </a>
            </div>
            <div className="text">Humiditiy: {props.data.humidity}%</div>
            <div className="text">
              Wind speed: {Math.round(props.data.wind)} mph
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
              Temperature: {Math.round((props.data.temp * 9) / 5 + 32)}
              <a href="/" onClick={celcius}>
                °C
              </a>{" "}
              | °F
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
}
