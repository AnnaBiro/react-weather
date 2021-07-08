import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#0d6efd"
    size={64}
    animate={true}
  />
  ) ; 
}