import Loading from "@/components/Loading"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { pedidoStore } from "@/services/pedidoService"
import { servicoShow } from "@/services/servicoService"
import { useEffect, useState } from "react"
import { FaPhoneAlt, FaUser } from "react-icons/fa"
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { StarRating } from "../Home"


export default function ServicoSelecionado() {

  const Usuario = useSelector((state: any) => state.auth.user)

  const [servico, setServico] = useState<any>(null)
  const { ServicoID } = useParams<{ ServicoID: string }>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    setLoading(true)
    servicoShow(ServicoID).then(res => { setServico(res) })
    setLoading(false)
  }, [])

  const handleSolicitarServico = async () => {

    const data = {
      MoradorID: Usuario.usuario.MoradorID,
      ServicoID: ServicoID,
    }

    try {
      const resp = await pedidoStore(data)
      toast({
        title: "Solicitação realizada com sucesso!",
        description: "Redirecionamento automático em 3 segundos"
      })
      setTimeout(() => {
        navigate('/home')
      }, 3000)
    }
    catch (e) {
      toast({
        title: "Erro ao solicitar serviço",
        variant: "destructive"
      })
    }

  }

  if (loading) {
    return <div className="flex items-center justify-center w-full h-64"><Loading /></div>
  }

  if (!servico) {
    return <div className="p-12"><p className="text-gray-50">Serviço não encontrado.</p></div>
  }

  return (
    <div className="h-full p-12 font-Roboto">

      <div className="flex flex-col">
        <span className="text-5xl font-bold text-gray-50 font-Montserrat">{servico.servico.Nome}</span>
        {/* <span className="text-xl text-gray-50 font-Montserrat opacity-60">{servico.servico.Categoria}</span> */}
      </div>

      <div className="flex items-center gap-2 mt-4">
        {/* <StarRating rating={servico || 0} className="text-3xl text-gray-50" /> */}
        <span className="text-xl italic font-thin text-gray-50">{servico.avaliacoes.length} Avaliações</span>
      </div>

      <div className="grid grid-cols-12 gap-12 mt-12">

        <p className="col-span-6 text-xl font-thin text-justify text-gray-50">{servico.servico.Descricao}</p>

        <div className="flex flex-col col-span-6 gap-4 pl-12 text-gray-50">

          <span className="text-2xl font-bold font-Montserrat">Dados do Prestador</span>

          <div className="flex items-center gap-2">
            <IoMdMail />
            <span className="text-xl font-thin">{servico?.prestador?.Email}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="text-xl font-thin">{servico?.prestador?.Telefone}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUser />
            <span className="text-xl font-thin">{servico?.prestador?.Usuario}</span>
          </div>

          <div className="flex flex-col gap-6">
            <Button variant={"secondary"}
              className="px-12 mt-4 text-lg font-bold w-fit"
              onClick={handleSolicitarServico}
            >Solicitar</Button>

          </div>

        </div>

      </div>

      <div className="mt-24">

        <span className="text-3xl font-bold font-Montserrat text-gray-50">Avaliações</span>
        <hr />

        <div className="flex flex-col gap-16 pb-24 mt-12">
          {servico.avaliacoes.length > 0 ?
            servico.avaliacoes.map((avaliacao: any, index: number) => (
              <div key={index} className=" text-gray-50">

                <span className="text-2xl font-thin font-Montserrat">{avaliacao.Usuario}</span>

                <div className="flex items-center gap-2">
                  <StarRating rating={avaliacao.Nota} className="text-2xl text-gray-400" />
                  <span className="text-xl font-bold">{avaliacao.Descricao}</span>
                </div>

                {/* <span className="italic text-gray-500">{avaliacao.DataRegistro}</span> */}

                {/* <p className="w-64 text-justify">{avaliacao.Comentario}</p> */}

              </div>
            ))
            :
            <span className="italic opacity-50 text-gray-50 font-Roboto">Nenhuma avaliação encontrada</span>
          }

        </div>

      </div>

      {
        servico.prestador.Telefone &&
        <a href={`https://api.whatsapp.com/send?phone=+55${servico.prestador.Telefone.replace("(", '').replace(")", "")}`} target="_blank">
          <IoLogoWhatsapp className="fixed text-6xl text-white transition-colors cursor-pointer right-12 bottom-24 hover:text-emerald-700" />
        </a>
      }

    </div>
  )
}
