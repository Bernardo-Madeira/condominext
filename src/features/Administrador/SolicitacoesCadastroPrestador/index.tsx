import { DataTable } from "@/components/DataTable"
import { columns } from "./column"
import { useEffect, useState } from "react"
import { prestadoresSolicitacao } from "@/services/prestadorService"



export default function SolicitacoesCadastroPrestador() {
  const [solicitacoes, setSolicitacoes] = useState([])

  useEffect(() => {
    prestadoresSolicitacao().then((res) => {
      setSolicitacoes(res)
    })
  })

  return (
    <div className="p-12">
      <span className="text-4xl font-bold font-Montserrat text-gray-50 ">Cadastro de Prestadores</span>

      <DataTable
        columns={columns}
        data={solicitacoes}
      />
    </div>
  )

}