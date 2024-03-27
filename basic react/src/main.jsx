import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Contact from './Contact.jsx'
import Profile from './Profile.jsx'
import Product from './Product.jsx'
import './index.css'
// import Home from '/basic react/index.html'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// document.getElementsByClassName("btn").forEach((el) => {
//   el.addEventListener("click", (bt)=>{
    
//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <React.StrictMode>
//         < />
//       </React.StrictMode>,
//     )
//   })
// });

document.getElementById('login').addEventListener('click', ()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>,
  )
})

document.getElementById('contact').addEventListener('click', ()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Contact />
    </React.StrictMode>,
  )
})

document.getElementById('profile').addEventListener('click', ()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Profile />
    </React.StrictMode>,
  )
})

document.getElementById('product').addEventListener('click', ()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Product />
    </React.StrictMode>,
  )
})


// document.getElementById('home').addEventListener('click', ()=>{
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   )
// })