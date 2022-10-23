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
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 col-sm-3 ">
              <span className="weatherIcon">
                <WeatherIcon code={props.data.icon} size={60} />
              </span>
            </div>
            <div className="col-12 col-sm-3 mt-3">
              <span className="currentTemp">
                <CurrentTemp celsius={props.data.temperature} />
              </span>
            </div>
            <div className="col-12 col-sm-3 mt-3">
              <span className="humidity-element">
                Humidity:{" "}
                <span className="humidity">
                  {Math.round(props.data.humidity)}
                </span>
                %
              </span>
            </div>
            <div className="col-12 col-sm-3 mt-3">
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
