import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/authContext/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext'


ReactDOM.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
)