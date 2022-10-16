import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather defaultCity="Tokyo" />
        <footer>
          <a
            href="https://github.com/olesyaMuzyka/weather-react"
            target="blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>
          <strong> by Olesya Muzyka</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
