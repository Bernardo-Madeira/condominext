
import { Link } from "react-router-dom"

export default function NotFoundPage(){

  return(

    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 bg-gray-900 text-gray-50">

      <div className="flex items-center font-bold text-8xl">
        <span>4</span>
        <span className="text-red-600">0</span>
        <span>4</span>
      </div>

      <span className="text-xl">Página não encontrada</span>

      <Link to={'/login'} className="px-4 py-1 text-lg font-bold text-gray-900 bg-gray-200 rounded-sm">Voltar</Link>

    </div>
  )

}