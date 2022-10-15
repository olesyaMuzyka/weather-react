import React from "react";
import TodayDate from "./TodayDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h4>{props.data.city}</h4>
      <div className="todayWeather">
        <div className="todayDate">
          <TodayDate date={props.data.date} />
        </div>
        <div className="text-capitalize mt-3">{props.data.description}</div>
        <div class="container">
          <div class="row row-cols-auto mt-3">
            <div class="col">
              <span className="weatherIcon">
                <WeatherIcon code={props.data.icon} />
              </span>
            </div>
            <div class="col mt-3">
              <span className="currentTemp">
                <CurrentTemp celsius={props.data.temperature} />
              </span>
            </div>
            <div class="col mt-3">
              <span className="humidity-element">
                Humidity:{" "}
                <span className="humidity">
                  {Math.round(props.data.humidity)}
                </span>
                %
              </span>
            </div>
            <div class="col mt-3">
              <span className="wind-element">
                Wind:{" "}
                <span className="wind">{Math.round(props.data.wind)}</span> km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}