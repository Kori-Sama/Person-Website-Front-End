import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './assets/styles/global.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
