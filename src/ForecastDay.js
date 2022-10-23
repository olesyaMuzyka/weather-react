import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°/`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay mb-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="ForecastTemperatures mt-3">
        <span className="TemperatureMax">{maxTemp()}</span>
        <span className="TemperatureMin">{minTemp()}</span>
      </div>
    </div>
  );
}
