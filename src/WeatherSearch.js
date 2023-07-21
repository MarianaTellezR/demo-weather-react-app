import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div className="WeatherSearch">
      <div className="get-current-info">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            className="input-search"
          />
          <button type="submit" className="btn btn-primary search">
            Search
          </button>
        </form>
        <button className="btn btn-success current">Current</button>
      </div>
      <div className="weather-stats">
        <h2>Lisbon</h2>
        <p>Friday 13:11</p>
        <p>Clouds</p>
        <div className="row">
          <div className="col-sm-6 left-side-weather-stats">
            <h1>22</h1>
            <p>
              <small>°C</small>
            </p>
          </div>
          <div className="col-sm-6 right-side-weather-stats">
            <p>Precipitation: 62 %</p>
            <p>Wind: 6 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
