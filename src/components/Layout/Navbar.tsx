
// Icones
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaPersonDigging } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaPowerOff } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

export default function Navbar() {

  const { usuario, tipo } = useSelector((state: any) => state.auth.user)
  const [opcaoSelect, setOpcaoSelect] = useState('morador')
  const n = useNavigate()

  const logout = () => {
    localStorage.removeItem('usuario')
    n('/login')
  }

  return (

    <div className="flex flex-col items-center justify-between w-1/4 h-full p-4 pt-12 bg-gray-800 max-w-96 font-Montserrat text-gray-50">

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center p-2 rounded-full w-fit bg-gray-50">
          <FaUser className="text-4xl text-gray-900 " />
        </div>
        <span className="text-2xl">{usuario.Usuario}</span>
        {
          (tipo == 'morador' && usuario.PrestadorID) &&
          <Select defaultValue="morador" onValueChange={(e) => setOpcaoSelect(e)}>
            <SelectTrigger className="text-lg bg-gray-500 border-0">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="morador">Morador</SelectItem>
                <SelectItem value="prestador">Prestador</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        }
      </div>

      <ul className="flex flex-col justify-end w-full h-full gap-6 pb-12 text-xl">

        {
          (tipo == 'morador' && usuario.PrestadorID != null) ?
            (
              opcaoSelect == 'morador' ?
                <>
                  <Link to={"/pedidosMorador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaCartShopping className="text-xl" />Pedidos</li></Link>
                  <Link to={"/home"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><MdDesignServices className="text-xl" />Serviços</li></Link>
                  <Link to={"/cadastrarPrestador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><IoAdd className="text-xl" />Cadastrar Prestador</li></Link>
                </>
                :
                <>
                  <Link to={"/meusServicos"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaPersonDigging />Meus Serviços</li></Link>
                  <Link to={"/pedidosPrestador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaCartShopping className="text-xl" />Pedidos</li></Link>
                </>
            )

            :

            (
              tipo == 'administrador' ?
                <>
                  <Link to={"/cadastrarMorador"}><li className="flex items-center gap-2 transition-colors cursor-pointer hover:text-gray-400"><IoAdd />Cadastrar Morador</li></Link>
                  <Link to={"/moradores"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaUsers />Moradores</li></Link>
                  <Link to={"/solicitacoesCadastroPrestador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><AiFillBell className="text-xl" />Solicitações Prestadores</li></Link>
                </>
                : tipo == 'morador' ?
                  <>
                    <Link to={"/pedidosMorador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaCartShopping className="text-xl" />Pedidos</li></Link>
                    <Link to={"/home"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><MdDesignServices className="text-xl" />Serviços</li></Link>
                    <Link to={"/cadastrarPrestador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><IoAdd className="text-xl" />Cadastrar Prestador</li></Link>
                  </>
                  : tipo == 'prestador' ?
                    <>
                      <Link to={"/meusServicos"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaPersonDigging />Meus Serviços</li></Link>
                      <Link to={"/pedidosPrestador"}><li className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gray-400"><FaCartShopping className="text-xl" />Pedidos</li></Link>
                    </>
                    : ''
            )


        }



      </ul>


      <div className="flex items-center gap-2 text-xl cursor-pointer" onClick={logout}>

        <FaPowerOff className="text-xl text-gray-50" />
        <span>Sair</span>

      </div>

    </div>
  )
}