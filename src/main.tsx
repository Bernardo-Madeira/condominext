import React from 'react'
import ReactDOM from 'react-dom/client'
import './setup/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './features/Login'
import NotFoundPage from './components/NotFoundPage'
import Layout from './components/Layout'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/layout" element={<Layout />} >

        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
