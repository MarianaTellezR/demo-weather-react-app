import React, { useState } from "react";
import "./WeatherSearch.css";

import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d1b73b9f0676715bbd0cc493b72eb781";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="WeatherSearch">
        <div className="get-current-info">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              className="input-search"
              onChange={updateCity}
            />
            <button type="submit" className="btn btn-primary search">
              Search
            </button>
          </form>
          <button className="btn btn-success current">Current</button>
        </div>
        <div className="weather-stats">
          <h2>{weather.name}</h2>
          <p>Friday 13:11</p>
          <p>{weather.description}</p>
          <div className="row">
            <div className="col-sm-6 left-side-weather-stats">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={48}
                animate={true}
              />
              <h1>{Math.round(weather.temperature)}</h1>
              <p>
                <small>°C</small>
              </p>
            </div>
            <div className="col-sm-6 right-side-weather-stats">
              <p>Humidity: {weather.humidity} %</p>
              <p>Wind: {weather.wind} km/h</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherSearch">
        <div className="get-current-info">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              className="input-search"
              onChange={updateCity}
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
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={64}
                animate={true}
              />
              <h1>22</h1>
              <p>
                <small>°C</small>
              </p>
            </div>
            <div className="col-sm-6 right-side-weather-stats">
              <p>Humidity: 62 %</p>
              <p>Wind: 6 km/h</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
