import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NotFoundPage from './components/NotFoundPage'
import CriarServico from './features/CriarServico'
import Home from './features/Home'
import Login from './features/Login'
import ServicoSelecionado from './features/ServicoSelecionado'
import Solicitacoes from './features/Solicitacoes/registros'
import './setup/index.css'
import MeusServicos from './features/MeusServicos'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<Layout />} >

          <Route path='/home' element={<Home />} />
          <Route path='/servico/:idServico' element={<ServicoSelecionado />} />
          <Route path='/criarServico' element={<CriarServico />} />
          <Route path='/solicitacoes' element={<Solicitacoes />} />
          <Route path='/meusServicos' element={<MeusServicos />} />

        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
