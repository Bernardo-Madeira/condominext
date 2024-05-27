import { DataTable } from "@/components/DataTAble";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import {serviceGetAllUsers} from "../usuarioService"

export default function UsuariosCondominio() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function getAllUsers(condominioID: string) {
      const res = serviceGetAllUsers(condominioID)
      setUsuarios(res)
    }
    getAllUsers("1")
  }, [])

  return (
    <div className="p-12">

      <span className="text-4xl font-bold font-Montserrat text-gray-50">Usuários do Condomínio</span>

      <DataTable
      columns={columns}
      data={usuarios}
      />

    </div>
  )
}