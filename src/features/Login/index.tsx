import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { usuarioLogin } from '@/services/usuarioService';
import { login } from '@/store';

export default function Login() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLoginSubmit = async (data: any) => {

    setLoading(true)

    try {

      const response = await usuarioLogin({ Email: "admin@admin.com", Senha: "admin" })

      if (response.UsuarioID) {
        dispatch(login(response.data))
        navigate('/home')
      } else {
        alert("Usuário não encontrado")
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="grid min-h-screen grid-cols-12 bg-gray-950">
      <div className="flex items-center justify-center h-full col-span-8 predio-background">
        <span className="text-6xl font-bold text-gray-200 font-Montserrat">
          Condomi<span className="font-normal text-gray-700">Next</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center h-full col-span-4 gap-12 p-12 bg-gray-100">
        <div className="flex items-center w-full gap-8">
          <div className="w-full bg-gray-950 p-0.5 rounded-full"></div>
          <span className="text-5xl font-Montserrat">Login</span>
          <div className="w-full bg-gray-950 p-0.5 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center w-full gap-4 p-2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
