import { useState } from 'react'
import './App.css'

function App() {
  const [lucky, setLucky] = useState("???")
  const luckies = ["大吉🎉","中吉😊","中吉😊","吉🍀","吉🍀","吉🍀","小吉🌱","小吉🌱","凶💀"]

  const chooseLucky = () => {
    const resultLucky = Math.floor(Math.random() * luckies.length);
    setLucky(luckies[resultLucky])
  }

  return (
    <div className='app'>
      <h1>おみくじ</h1>
      <div className='fuda'></div>
      <h2>あなたの運勢は{lucky}です</h2>
      <button className='btn-hiku' onClick={chooseLucky}>ランダムで引く</button>
    </div>
  )
}

export default App
