import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/variables.css'
import './assets/css/style.css'

import { AuthProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>,
)
