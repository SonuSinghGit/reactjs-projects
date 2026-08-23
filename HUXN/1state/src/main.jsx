import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ShoppingCard from './ShoppingCard.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ShoppingCard/>
  </React.StrictMode>,
)
