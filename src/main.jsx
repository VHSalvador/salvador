import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { getInitialTheme } from './context/ThemeContext.jsx'

// Apply theme before first render to prevent flash of unstyled content
document.documentElement.setAttribute('data-theme', getInitialTheme());

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
)
