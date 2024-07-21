import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/mediaQuery.css'
import { DarkModeProvider } from './components/darkMode/DarkMode.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />   
    </DarkModeProvider>
  </React.StrictMode>,
)
