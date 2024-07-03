import { DataTable } from "@/components/DataTable"
import Loading from "@/components/Loading"
import { pedidoIndex } from "@/services/pedidoService"
import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import FormAvaliacao from "./FormAvaliacao"
import { columns } from "./column"

export default function PedidosMorador() {
  const [pedidos, setPedidos] = useState([])
  const [loading, setLoading] = useState(false)
  const Usuario = useSelector((state: any) => state.auth.user)
  const { PedidoID } = useParams<{ PedidoID: string }>()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (PedidoID) {
      setModalIsOpen(true)
    } else {
      setModalIsOpen(false)
    }
  }, [PedidoID])

  useEffect(() => {
    setLoading(true)
    pedidoIndex(Usuario?.usuario?.MoradorID).then((res) => {
      setPedidos(res)
      setLoading(false)
    })
  }, [Usuario?.usuario?.MoradorID, modalIsOpen])

  const onSubmit = () => {
    
  }

  return (
    <div className="relative h-full">
      {modalIsOpen && (
        <div
          className="absolute z-10 flex items-center justify-center w-full h-full p-12 "
          style={{ backgroundColor: "rgb(17, 24, 39, 0.85)" }}
        >
          <IoClose
            className="absolute text-5xl cursor-pointer top-2 right-2 text-gray-50"
            onClick={() => navigate(-1)}
          />
          <div className="p-6 rounded bg-gray-50 w-[34rem] h-96 shadow shadow-gray-400">
            <FormAvaliacao onSubmit={onSubmit} />
          </div>
        </div>
      )}

      <div className="p-12">
        <span className="text-4xl font-bold font-Montserrat text-gray-50">
          Pedidos
        </span>

        {loading ? (
          <div className="flex items-center justify-center w-full h-64">
            <Loading />
          </div>
        ) : (
          <DataTable columns={columns} data={pedidos} />
        )}
      </div>
    </div>
  )
}
