import axios from "axios";
import React, { useState, useEffect } from "react";
import "./forecast.css";
import ForecastData from "./forecastData";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    console.log(forecastData);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastData data={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else {
    let forecastApiKey = "2718952144ed077c12e7c160fb6fc351";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${forecastApiKey}&units=metric`;
    axios.get(forecastApiUrl).then(handleResponse);

    return null;
  }
}
