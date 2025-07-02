import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import itgImage from './assets/images/itg-logo-nobg.png'
import './index.css'
import App from './App.jsx'

// Dynamically sets the tab icon (favicon)
const link = document.createElement("link");
link.rel = "icon";
link.href = itgImage;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
