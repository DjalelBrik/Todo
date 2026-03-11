import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './Router/App'
import { TaskProvider } from './Context/TaskContext'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </TaskProvider>
)
