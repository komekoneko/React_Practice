import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [arry, setArry] = useState([]);
  const [checked, setChecked] = useState(false);

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
            <li key={index}>
              <input type="checkbox" value={checked} />
              {arries} <button onClick={() => delFn(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
