
// Icones
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-full bg-gray-800 w-1/4 max-w-96 pt-12 p-4 flex flex-col items-center justify-between font-Montserrat text-gray-50">

      {/* User */}
      <div className="flex items-center gap-4 flex-col">
        <div className="w-fit p-2 flex items-center justify-center rounded-full bg-gray-50">
          <FaUser className="text-4xl text-gray-900" />
        </div>
        <span className="text-2xl">Fulano da Silva</span>
      </div>

      {/* Options */}
      <ul className="flex flex-col w-full text-2xl gap-6">
        <li className="flex items-center gap-3 cursor-pointer transition-colors hover:text-gray-400"><MdDesignServices/>Meus Serviços</li>
        <li className="flex items-center gap-3 cursor-pointer transition-colors hover:text-gray-400"><FaCartShopping className="text-xl"/>Solicitações</li>
        <Link to={"/criarServico"}><li className="flex items-center gap-3 cursor-pointer transition-colors hover:text-gray-400"><IoAdd />Criar Serviço</li></Link>
      </ul>

    </div>
  )
}