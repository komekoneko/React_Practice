import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [arry, setArry] = useState([]);

  const submitBtn = () => {

  }

  return (
    <>
      <h1>TodoApp</h1>
      <label htmlFor="inp">Todo: </label>
      <input type="text" value={input} id="inp" placeholder="Todoをここに記入しましょう" onClick={(e) => setInput(e.target.value)}/>
      <button id="btn" onClick={() => submitBtn}>送信</button>
    </>
  );
}

export default App;
