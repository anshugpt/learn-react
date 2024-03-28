import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Contact from './Contact.jsx'
import Profile from './Profile.jsx'
import Product from './Product.jsx'
import './index.css'
// import Home from '/basic react/index.html'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// document.getElementsByClassName("btn").forEach((el) => {
//   el.addEventListener("click", (bt)=>{
    
//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <React.StrictMode>
//         < />
//       </React.StrictMode>,
//     )
//   })
// });

document.getElementById('root').addEventListener('click', (event)=>{
  if(event.target.id == 'login'){
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
    )
  }
})

document.getElementById('root').addEventListener('click', (event)=>{
  if(event.target.id == 'contact'){
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Contact />
      </React.StrictMode>,
    )
  }
})

document.getElementById('root').addEventListener('click', (event)=>{
  if(event.target.id == 'profile'){
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Profile />
      </React.StrictMode>,
    )
  }
})

document.getElementById('root').addEventListener('click', (event)=>{
  if(event.target.id == 'product'){
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Product />
      </React.StrictMode>,
    )
  }
})


document.getElementById('root').addEventListener('click', (event)=>{
  if(event.target.id == 'btn'){
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
})