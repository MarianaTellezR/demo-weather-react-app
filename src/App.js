import "./App.css";
import Header from "./Header";
import WeatherSearch from "./WeatherSearch";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <div className="container-weather-app">
        <Header />
        <WeatherSearch />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default App;
