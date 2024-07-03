import { DataTable } from "@/components/DataTable"
import Loading from "@/components/Loading"
import { servicoIndex, servicoDelete } from "@/services/servicoService" // Certifique-se de importar servicoDelete se não estiver importado
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { columns } from "./columns"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { IoClose } from "react-icons/io5"
import CriarServicoForm from "./CriarServicoForm"

export default function MeusServicos() {
  const [servicos, setServicos] = useState([])
  const [loading, setLoading] = useState(false)
  const Usuario = useSelector((state: any) => state.auth.user)
  const { toast } = useToast()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    setLoading(true)
    servicoIndex(Usuario.usuario.PrestadorID)
      .then((res) => {
        setServicos(res)
      })
      .finally(() => setLoading(false))
  }, [modalIsOpen])

  const handleServicoDelete = async (ServicoID) => {
    try {
      const res = await servicoDelete(ServicoID)
      toast({
        description: "Serviço Deletado Com Sucesso"
      })
      setServicos((prevServicos) => prevServicos.filter((servico) => servico.ServicoID !== ServicoID))
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="relative h-full">

      {
        modalIsOpen &&
        <div className="absolute z-10 flex items-center justify-center w-full h-full p-12 "
          style={{ backgroundColor: "rgb(17, 24, 39, 0.85)" }}

        >
          <IoClose className="absolute text-5xl cursor-pointer top-2 right-2 text-gray-50"
            onClick={() => setModalIsOpen(false)} />

          <div className="p-6 rounded bg-gray-50 w-[32rem] h-96 shadow shadow-gray-400">

            <CriarServicoForm
              setModalIsOpen={setModalIsOpen}
            />

          </div>

        </div>
      }

      <div className="p-12">
        <span className="text-4xl font-bold font-Montserrat text-gray-50">Meus Serviços</span>
        {loading ? (
          <div className="flex items-center justify-center w-full h-64">
            <Loading />
          </div>
        ) : (
          <>
            <DataTable columns={columns(handleServicoDelete)} data={servicos} />
            <div className="flex items-center justify-center mt-12">
              <Button variant={"secondary"} className="font-bold" onClick={() => setModalIsOpen(true)}>Criar Serviço</Button>
            </div>
            <Toaster />
          </>
        )}
      </div>

    </div>
  )
}
