import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import CriarServico from './features/CriarServico';
import Home from './features/Home';
import Login from './features/Login';
import ServicoSelecionado from './features/ServicoSelecionado';
import UsuarioArea from './features/UsuarioArea';
import UsuariosCondominio from './features/UsuariosCondominio/registros';
import './setup/index.css';
import { store } from './store';
import Pedidos from './features/Pedidos/registros';
import MeusServicos from './features/MeusServicos';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/home" element={<Home />} />
            <Route path="/servico/:ServicoID" element={<ServicoSelecionado />} />
            <Route path="/criarServico" element={<CriarServico />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/usuarios" element={<UsuariosCondominio />} />
            <Route path="/usuarioArea" element={<UsuarioArea />} />
            <Route path="/meusServicos" element={<MeusServicos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
