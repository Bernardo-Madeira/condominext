import { useNavigate } from "react-router-dom" // Importa o useNavigate do React Router
import LoginForm from "./LoginForm"
import { useState } from "react"
import { UserFormType } from "./LoginType"
import loginUser, { LoginResponse } from "./LoginService"

export default function Login() {
  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() // Obtém a função navigate para navegação

  const handleLoginSubmit = async (data: UserFormType) => {
    setLoading(true)

    try {
      const response: LoginResponse = await loginUser({ data })

      if (response.success) {
        console.log('Login bem-sucedido:', response.data)
        // Usar o REDUX para salvar os dados do usuário logado
        navigate("/home")
      } else {
        console.error('Erro durante o login:', response.error)
      }
    } catch (error) {
      console.error('Erro durante o login:', error)
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
          <LoginForm onSubmit={handleLoginSubmit} loading={loading} />
        </div>
      </div>
    </div>
  )
}
