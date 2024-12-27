import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import { ListadoApp } from './ListadoApp.jsx'
import { Tarea } from './components/Tarea.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>,
)
