import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import { ListadoApp } from './components/ListadoApp.jsx'
import { Tarea } from './components/Tarea.jsx'
import App from './App.jsx'
import {UsersApp} from './UsersApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp></UsersApp>
  </StrictMode>,
)
