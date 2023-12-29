import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MiNotaApp from './MiNotaApp';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MiNotaApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
