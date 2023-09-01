import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MiNotaApp from './MiNotaApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MiNotaApp />
    </BrowserRouter>
  </React.StrictMode>,
)
