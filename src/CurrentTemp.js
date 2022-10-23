import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentTemp">
      <span className="degrees">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
