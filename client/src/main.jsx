import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth } from "./Auth";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth>
  ,
)
