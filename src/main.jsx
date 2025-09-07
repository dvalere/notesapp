import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './amplifyClient'        // <-- add this line
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
