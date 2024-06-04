import { useState } from "react";
import { DataTable } from "@/components/DataTAble";
import { columns } from "./columns";
import Loading from "@/components/Loading";


export default function Pedidos() {

  const [pedidos, setPedidos] = useState([])
  const [loading, setLoading] = useState(false)


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