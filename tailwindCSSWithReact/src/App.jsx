import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind test</h1>
      <Card userName='Anshu' btnName='Profile'/>
      <Card userName='Anjali' btnName='Contact'/>
    </>
  )
}

export default App
