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
    <div className="min-h-screen bg-gray-950 grid grid-cols-12">
      <div className="h-full col-span-8 flex justify-center items-center predio-background">
        <span className="font-Montserrat font-bold text-gray-200 text-6xl">
          Condomi<span className="text-gray-700 font-normal">Next</span>
        </span>
      </div>
      <div className="col-span-4 bg-gray-100 p-12 gap-12 h-full flex justify-center flex-col items-center">
        <div className="flex items-center gap-8 w-full">
          <div className="w-full bg-gray-950 p-0.5 rounded-full"></div>
          <span className="font-Montserrat text-5xl">Login</span>
          <div className="w-full bg-gray-950 p-0.5 rounded-full"></div>
        </div>
        <div className="p-2 w-full flex flex-col items-center gap-4">
          <LoginForm onSubmit={handleLoginSubmit} loading={loading} />
        </div>
      </div>
    </div>
  )
}
