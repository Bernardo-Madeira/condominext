import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import CriarServico from './features/Prestador/CriarServico';
import Home from './features/Morador/Home';
import Login from './features/Login';
import ServicoSelecionado from '@/features/Morador/ServicoSelecionado'
import UsuarioArea from './features/UsuarioArea';

import './setup/index.css';
import { store } from './store';
import Pedidos from './features/Pedidos/registros';
import MeusServicos from './features/Prestador/MeusServicos';
import Cadastro from './Cadastro';
import CadastrarMorador from './features/Administrador/CadastrarMorador';
import MoradoresCondominio from './features/Administrador/UsuariosCondominio/registros';
import { Toaster } from "@/components/ui/toaster"
import CadastrarPrestador from './features/Morador/CadastrarMorador';
import SolicitacoesCadastroPrestador from './features/Administrador/SolicitacoesCadastroPrestador';
import PedidosMorador from './features/Morador/PedidosMorador';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            {/* MORADOR */}
            <Route path="/home" element={<Home />} />
            <Route path="/servico/:ServicoID" element={<ServicoSelecionado />} />
            <Route path="/cadastrarPrestador" element={<CadastrarPrestador />} />
            <Route path="/pedidosMorador" element={<PedidosMorador />} />
            <Route path="/pedidosMorador/:PedidoID" element={<PedidosMorador />} />
            
            {/* ADMINISTRADOR */}
            <Route path="/moradores" element={<MoradoresCondominio />} />
            <Route path="/cadastrarMorador" element={<CadastrarMorador />} />
            <Route path="/solicitacoesCadastroPrestador" element={<SolicitacoesCadastroPrestador />} />


            {/* PRESTADOR */}
            <Route path="/meusServicos" element={<MeusServicos />} />
            <Route path="/pedidosPrestador" element={<Pedidos />} />

          </Route>
        </Routes>
          <Toaster/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
