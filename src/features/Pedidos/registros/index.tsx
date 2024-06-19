import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";
import Loading from "@/components/Loading";
import { useSelector } from "react-redux";
import { getPedidos } from "@/services/prestadorService";


export default function Pedidos() {

  const [pedidos, setPedidos] = useState([])
  const [loading, setLoading] = useState(false)

  const Usuario = useSelector((state: any) => state.auth.user)
 
  useEffect(() => {
    getPedidos(Usuario.usuario.PrestadorID).then(res => {
      console.log(res)
      setPedidos(res)
    })
 
  }, [])


  return (

    <div className="p-12">

      <span className="text-4xl font-bold font-Montserrat text-gray-50">Pedidos</span>

      {
        loading
        ?
        <div className="flex items-center justify-center w-full h-64"><Loading /></div>
        :
        <DataTable
          columns={columns}
          data={pedidos}
        />

      }

    </div>

  )
}