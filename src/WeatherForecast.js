import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <p>Sat</p>
          <ReactAnimatedWeather
            icon="FOG"
            color="black"
            size={48}
            animate={true}
          />
          <p>20°</p>
        </div>
        <div className="col-2">
          <p>Sun</p>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={48}
            animate={true}
          />
          <p>23°</p>
        </div>
        <div className="col-2">
          <p>Mon</p>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="black"
            size={48}
            animate={true}
          />
          <p>15°</p>
        </div>
        <div className="col-2">
          <p>Tue</p>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={48}
            animate={true}
          />
          <p>17°</p>
        </div>
        <div className="col-2">
          <p>Wed</p>
          <ReactAnimatedWeather
            icon="SLEET"
            color="black"
            size={48}
            animate={true}
          />
          <p>19°</p>
        </div>
        <div className="col-2">
          <p>Thru</p>
          <ReactAnimatedWeather
            icon="SNOW"
            color="black"
            size={48}
            animate={true}
          />
          <p>22°</p>
        </div>
      </div>
    </div>
  );
}
