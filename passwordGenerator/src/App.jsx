import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)   // to change the states
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)  // to take referance ofanything and do something on it

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0987654321";
    if(charAllowed) str += ";:|\{[]}*&^%$#@!~"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length)+1
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    generatePassword()
  }, [length, numAllowed, charAllowed, generatePassword])

  return (
    <>
      <h1 className='text-center text-black text-xl'>Password Generator</h1>
      <div className='w-2/4 h-32 bg-gray-200 ml-96 mt-4 rounded-xl'>
        <input type="text" value={password} placeholder='password' readOnly className='bg-gray-200 w-3/4 rounded-xl border-4 border-black-700 border-solid' ref={passwordRef}/>&nbsp;&nbsp;
        <button className='bg-blue-400 rounded-md text-#000 p-1' onClick={copyToClipboard}>Copy</button>
        <br />
        <input type="range" name="length" id="length" min={8} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}/>&nbsp;&nbsp;
        <label htmlFor="length">Length : {length}</label>&nbsp;&nbsp;
        <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=> {setNumAllowed((perv)=> !perv)}}/>&nbsp;
        <label htmlFor="numberInput">Number</label>&nbsp;&nbsp;
        <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((perv)=> !perv)}}/>&nbsp;
        <label htmlFor="charInput">Character</label>
      </div>
    </>
  )
}

export default App
