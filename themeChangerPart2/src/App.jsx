import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [defaultTheme, setDefaultTheme] = useState("light");

  const lightMode = () => {
    setDefaultTheme("light");
  }

  const darkMode = () => {
    setDefaultTheme("dark");
  }

  useEffect(()=>{
    let htmlBox = document.querySelector("body")
    htmlBox.classList.remove("light", "dark")
    htmlBox.classList.add(defaultTheme)
  }, [defaultTheme])


  return (
    <ThemeProvider value={{defaultTheme, lightMode, darkMode}}>
      <h1 className='p-4 text-3xl bg-pink-400'>Anshu Gupta</h1>
      <ThemeBtn/>
      <Card/>
    </ThemeProvider>
  )
}

export default App
