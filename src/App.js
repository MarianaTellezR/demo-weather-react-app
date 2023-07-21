import "./App.css";
import Header from "./Header";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container-weather-app">
        <Header />
        <WeatherSearch />
      </div>
    </div>
  );
}

export default App;
