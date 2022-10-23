import React, { useState } from "react";
import axios from "axios";
import "./form.css";

export default function Form() {
  let [city, setCity] = useState("");
  let apiKey = `b773b1f10cb8a98f50537146605ab6f2`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let [temp, setTemp] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [cityName, setCityName] = useState("");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  function updateWeather(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
    setCityName(response.data.name);
    console.log(response.data);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(updateWeather);
  }

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
      <h1>{cityName}</h1>
      <h6>
        Last updated: {currentDay}, {currentHour}:{currentMinutes}
      </h6>
      <div className="row">
        <div className="col-2">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather"
            id="weather-icon"
            className="weather-icon"
          />
        </div>
        <div className="col-10">
          <div className="text">
            Temperature: {Math.round(temp)}
            <span id="current-temp"></span>
            <span className="celsius">°C</span>
          </div>
          <div className="text">
            Humiditiy: {humidity}
            <span id="current-humiditiy"></span>%
          </div>
          <div className="text">
            Wind speed: {wind}
            <span id="current-wind-speed"></span> mph
          </div>
        </div>
      </div>
    </div>
  );
}
