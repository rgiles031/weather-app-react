import React from "react";

export default function ForecastData(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="day">{formatDay()}</div>
      <div className="forecastIcon">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="weather"
        />
      </div>
      <div>
        <span className="forecastTemp-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="forecastTemp-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
