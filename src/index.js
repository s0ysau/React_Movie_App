import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
// import dotenv from 'dotenv'
// dotenv.config()

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
