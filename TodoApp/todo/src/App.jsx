import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [arry, setArry] = useState([]);

  const submitBtn = () => {
    if(input === ""){
      return alert("Todoを記入してください");
    }
    const newArry = [...arry, {text: input, done: false, id: crypto.randomUUID()}];
    setArry(newArry);
    setInput("");
  };

  const delFn = (id) => {
    const delArry = arry.filter((ar) => {
      return ar.id !== id;
    });
    setArry(delArry);
  };

  const toggleFn = (id) => {
    const togArry = arry.map((ar) => {
      return ar.id === id? {...ar, done: !ar.done} : ar;
    });
    setArry(togArry);
  }

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
      submitBtn();
    }}>
    <h1>TodoApp</h1>
      <label htmlFor="inp">Todo: </label>
      <input
        type="text"
        value={input}
        id="inp"
        placeholder="Todoをここに記入しましょう"
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="btn" type="submit">
        送信
      </button>
    </form>
      

      <ul>
        {arry.map((arries, index) => {
          return (
            <li key={arries.id}>
              <input type="checkbox" checked={arries.done} onChange={() => toggleFn(arries.id)} />
              <span style={{ textDecoration: arries.done ? "line-through" : "none" }}>{arries.text}</span> <button onClick={() => delFn(arries.id)}>削除</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
