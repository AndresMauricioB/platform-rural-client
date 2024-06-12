import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthFirebaseContext.jsx'
import { ServerProvider } from './contexts/ServerContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
                <ServerProvider>
                    <App />
                </ServerProvider>
        </AuthProvider>
    </React.StrictMode>,
)
