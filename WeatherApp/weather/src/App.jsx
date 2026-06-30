import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const myAPI = "49fcd1c19fd3d85a9b49ddf517ef3df1";

  const searchFn = async(e) => {
    e.preventDefault()
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myAPI}&units=metric&lang=ja`)
    const data = await res.json();
    
    if(!res.ok){
      return alert("データが取得できませんでした。")
    }

    setWeather(data);

  }

  return (
    <>
      <form onSubmit={searchFn}>
        <h1>Weather App</h1>
        <input
          type="text"
          value={input}
          placeholder="国名または都市名を入力"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>検索</button>     
      </form>
      <li>{weather && (
        <div>
          <p>名称：{weather.name}</p>
          <p>現在の気温：{weather.main.temp}℃</p>
          <p>現在の空：{weather.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        </div>
      )}</li>     
    </>
  );
}

export default App;
