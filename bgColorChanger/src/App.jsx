import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function addRed(){
    document.querySelector("body").style.backgroundColor = "red"
  }
  function addGreen(){
    document.querySelector("body").style.backgroundColor = "green"
  }
  function addYellow(){
    document.querySelector("body").style.backgroundColor = "yellow"
  }
  function addBlack(){
    document.querySelector("body").style.backgroundColor = "black"
  }

  return (
    <>
      <div className='bg-purple-400 p-3 rounded-xl'>
      <button
      onClick={addRed}
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Red
    </button>
    <button
      onClick={addYellow}
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Yellow
    </button>
    <button
    onClick={addBlack}
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Black
    </button>
    <button
    onClick={addGreen}
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Green
    </button>
      </div>
    </>
  )
}

export default App
