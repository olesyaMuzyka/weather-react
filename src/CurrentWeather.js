import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function CurrentWeather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "ca62161fa9c037c12a181a9e71f2e8ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <h1>
          <span className="weather">WEATHER </span>
          <span className="forecast">FORECAST</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
