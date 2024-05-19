
import { Link } from "react-router-dom"

export default function NotFoundPage(){

  return(

    <div className="w-full h-screen flex flex-col text-gray-50 justify-center items-center bg-gray-900 gap-4">

      <div className="flex items-center font-bold text-8xl">
        <span>4</span>
        <span className="text-red-600">0</span>
        <span>4</span>
      </div>

      <span className="text-xl">Página não encontrada</span>

      <Link to={'/'} className="bg-gray-200 text-gray-900 px-4 py-1 text-lg font-bold rounded-sm">Voltar</Link>

    </div>
  )

}