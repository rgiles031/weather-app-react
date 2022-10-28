import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Form(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleWeatherData(response) {
    setWeatherData({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      cityName: response.data.name,
      ready: true,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather() {
    let apiKey = `b773b1f10cb8a98f50537146605ab6f2`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="city-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city"
                id="city-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-success" id="current-click">
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    getWeather(city);
  }
}
