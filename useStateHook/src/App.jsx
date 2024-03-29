import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addNum(){
    if(count<20) {
      setCount(count+1)
    }
  }

  function removeNum(){
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Anshu Gupta {count}</h1>
      <h3>mini project to understand hooks {count}</h3>
      <h4>count {count}</h4>
      <br />
      <button onClick={addNum}>Add {count}</button>
      <br />
      <button onClick={removeNum}>Remove {count}</button>
    </>
  )
}

export default App
