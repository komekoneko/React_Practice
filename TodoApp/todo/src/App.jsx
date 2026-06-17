import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [arry, setArry] = useState([]);

  const submitBtn = () => {
    const newArry = [...arry, input];
    setArry(newArry);
    setInput("");
  };

  return (
    <>
      <h1>TodoApp</h1>
      <label htmlFor="inp">Todo: </label>
      <input
        type="text"
        value={input}
        id="inp"
        placeholder="Todoをここに記入しましょう"
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="btn" onClick={submitBtn}>
        送信
      </button>

      <ul>
        {arry.map((arries, index) => {
          return <li key={index}>{arries}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
