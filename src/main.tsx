import React from 'react'
import ReactDOM from 'react-dom/client'
import './setup/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './features/Login'
import NotFoundPage from './components/NotFoundPage'
import Layout from './components/Layout'
import Home from './features/Home'
import CriarServico from './features/CriarServico'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<Layout />} >

          <Route path='/home' element={<Home/>}/>
          <Route path='/criarServico' element={<CriarServico/>}/>

        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
