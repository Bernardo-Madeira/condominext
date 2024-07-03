import { DataTable } from "@/components/DataTable"
import { useEffect, useState } from "react"
import { columns } from "./columns"
import { moradorIndex } from "@/services/moradorService"

export default function UsuariosCondominio() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    moradorIndex().then(res => {
      setUsuarios(res)
    })
  })


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