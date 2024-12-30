import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import { HookSApp } from './HookSApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookSApp></HookSApp>
  </StrictMode>,
)
