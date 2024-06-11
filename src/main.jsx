import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { ServerProvider } from './contexts/ServerContext.jsx'
import { AuthFirebaseProvider } from './contexts/AuthFirebaseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthFirebaseProvider>
            <AuthProvider>
                <ServerProvider>
                    <App />
                </ServerProvider>
            </AuthProvider> 
        </AuthFirebaseProvider>
    </React.StrictMode>,
)
