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
    </div>
  );
}
