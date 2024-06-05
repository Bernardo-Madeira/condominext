
// Icones
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar() {

  const Usuario = useSelector((state: any) => state.auth.user)

  return (

    <div className="flex flex-col items-center justify-between w-1/4 h-full p-4 pt-12 bg-gray-800 max-w-96 font-Montserrat text-gray-50">

      {/* User */}
      <Link to={"/usuarioArea"}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center p-2 rounded-full w-fit bg-gray-50 group hover:bg-gray-950">
            <FaUser className="text-4xl text-gray-900 transition-colors group-hover:text-gray-50" />
          </div>
          <span className="text-2xl">BLC {Usuario.Bloco}, APT {Usuario.Apartamento}</span>
        </div>
      </Link>

      {/* Options */}
      <ul className="flex flex-col w-full gap-6 text-xl">
        {/* <Link to={"/meusServicos"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaPersonDigging />Meus Serviços</li></Link> */}
        <Link to={"/pedidos"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaCartShopping className="text-xl" />Pedidos</li></Link>
        <Link to={"/home"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><MdDesignServices className="text-xl" />Serviços</li></Link>
        <Link to={"/criarServico"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><IoAdd />Criar Serviço</li></Link>
        {
          Usuario.Permissao == "admin" &&
          <Link to={"/usuarios"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaUsers />Usuários</li></Link>
        }
      </ul>

    </div>
  )
}