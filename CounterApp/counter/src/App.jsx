import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };
  const countMulti = () => {
    setCount((prev) => prev * 2);
  };
  const countDivied = () => {
    setCount((prev) => prev / 2);
  };

  return (
    <div className="card">
      <h1>Counter App</h1>
      <h2>現在のカウント:{count}</h2>
      <div className="btn-grid">
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
        <button onClick={countMulti}>*</button>
        <button onClick={countDivied}>/</button>
      </div>
    </div>
  );
}

export default App;
