import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [arry, setArry] = useState([]);

  const submitBtn = () => {
    if(input === ""){
      return alert("Todoを記入してください");
    }
    const newArry = [...arry, input];
    setArry(newArry);
    setInput("");
  };

  const delFn = (i) => {
    const delArry = arry.filter((ar, index) => {
      return index !== i;
    });
    setArry(delArry);
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
        onKeyDown={(e) => {
          if (e.key === "Enter") submitBtn();
        }}
      />
      <button id="btn" onClick={submitBtn}>
        送信
      </button>

      <ul>
        {arry.map((arries, index) => {
          return (
            <li key={index}>
              {arries} <button onClick={() => delFn(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
