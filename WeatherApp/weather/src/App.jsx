import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);

  const myAPI = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const searchFn = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myAPI}&units=metric&lang=ja`,
    );
    if (!res.ok) {
      return alert("データが取得できませんでした。");
    }
    const data = await res.json();
    setWeather(data);
  };

  return (
    <>
      <form onSubmit={searchFn}>
        <h1>Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            value={input}
            placeholder="国名または都市名を入力"
            onChange={(e) => setInput(e.target.value)}
          />
          <button>検索</button>
        </div>

        {weather && (
          <div className="result">
            <p className="city">{weather.name}</p>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className="temp">{Math.round(weather.main.temp)}°</p>
            <p className="desc">{weather.weather[0].description}</p>
          </div>
        )}
      </form>
    </>
  );
}

export default App;
