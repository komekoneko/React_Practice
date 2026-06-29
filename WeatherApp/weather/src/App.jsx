import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");


  return (
    <>
      <form onSubmit={searchFn}>
        <h1>Weather App</h1>
        <input
          type="text"
          value={input}
          placeholder="国名を入力してください"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>検索</button>
      </form>
      <li></li>
    </>
  );
}

export default App;
