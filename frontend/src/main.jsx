import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { JeffersonCiphersContextProvider } from './context/JeffersonCipherContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <JeffersonCiphersContextProvider>
      <App />
    </JeffersonCiphersContextProvider>

    
  </React.StrictMode>,
)
