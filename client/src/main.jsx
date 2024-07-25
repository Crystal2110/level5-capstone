import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import {DataContextProvider} from "./dataContext.jsx"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DataContextProvider>
  <Router>
  <App />
  </Router>
  </DataContextProvider>
  </React.StrictMode>,
)
