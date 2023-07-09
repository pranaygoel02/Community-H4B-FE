import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/user.context.jsx'
import ModalProvider from './context/modal.context.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
    <UserProvider>
      <Toaster />
      <App />
    </UserProvider>
    </ModalProvider>
  </React.StrictMode>,
)
