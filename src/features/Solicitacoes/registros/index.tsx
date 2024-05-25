import { useEffect, useState } from "react";
import { getAllSolicitacoes } from "../solicitacoesService";
import { TAsolicitacao } from "../types";
import { DataTable } from "@/components/DataTAble";
import { columns } from "./columns";


export default function Solicitacoes() {

  const [solicitacoes, setSolicitacoes] = useState<TAsolicitacao[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getSolicitacoes(userId: string) {
      setLoading(true)
      const res = await getAllSolicitacoes(userId)
      console.log(res)
      setSolicitacoes(res)
      setLoading(false)
    }
    getSolicitacoes('1')
  }, [])


  return (

    <div className="p-12">

      <span className="text-4xl font-bold font-Montserrat text-gray-50">Solicitações</span>

      {
        loading
        ?
        <div className="mt-6 text-xl animate-pulse text-gray-50">Carregando...</div>
        :
        <DataTable
          columns={columns}
          data={solicitacoes}
        />

      }

    </div>

  )
}