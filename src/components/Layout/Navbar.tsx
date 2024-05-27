
// Icones
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaPersonDigging  } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

export default function Navbar() {

  return (

    <div className="flex flex-col items-center justify-between w-1/4 h-full p-4 pt-12 bg-gray-800 max-w-96 font-Montserrat text-gray-50">

      {/* User */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center p-2 rounded-full w-fit bg-gray-50">
          <FaUser className="text-4xl text-gray-900" />
        </div>
        <span className="text-2xl">BLC 1, APT 200</span>
      </div>

      {/* Options */}
      <ul className="flex flex-col w-full gap-6 text-xl">
        <Link to={"/meusServicos"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaPersonDigging />Meus Serviços</li></Link>
        <Link to={"/solicitacoes"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaCartShopping className="text-xl"/>Solicitações</li></Link>
        <Link to={"/home"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><MdDesignServices  className="text-xl"/>Serviços</li></Link>
        <Link to={"/criarServico"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><IoAdd />Criar Serviço</li></Link>
        <Link to={"/usuarios"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaUsers  />Usuários</li></Link>
      </ul>

    </div>
  )
}