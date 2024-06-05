import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StarRating } from "../Home";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { servicoShow } from "@/services/servicoService";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import { pedidoStore } from "@/services/pedidoService";


export default function ServicoSelecionado() {

  const Usuario = useSelector((state: any) => state.auth.user)

  const [servico, setServico] = useState(null)
  const { ServicoID } = useParams<{ ServicoID: string }>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const [solicitarBotao, setSolicitarBotao] = useState(false)
  const [descricaoInput, setDescricaoInput] = useState('')


  useEffect(() => {
    setLoading(true)
    servicoShow(ServicoID).then(res => setServico(res))
    setLoading(false)
  }, [])

  const handlePedido = async () => {
    setLoading(true)
    const body = {
      Descricao: descricaoInput,
      MoradorID: Usuario.UsuarioID,
      ServicoID: servico.servico.ServicoID
    }
    try {
      const response = await pedidoStore(body)

      if (response) {
        console.log(response)
        navigate('/home')
      } else {
        alert(response.message)
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center w-full h-64"><Loading /></div>
  }

  if (!servico) {
    return <div className="p-12"><p className="text-gray-50">Serviço não encontrado.</p></div>;
  }

  return (
    <div className="h-full p-12 font-Roboto">

      <div className="flex flex-col">
        <span className="text-5xl font-bold text-gray-50 font-Montserrat">{servico.servico.Nome}</span>
        <span className="text-xl text-gray-50 font-Montserrat opacity-60">{servico.servico.Categoria}</span>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <StarRating rating={servico.mediaNotas || 0} className="text-3xl text-gray-50" />
        <span className="text-xl italic font-thin text-gray-50">{servico.totalAvaliacoes} Avaliações</span>
      </div>

      <div className="grid grid-cols-12 gap-12 mt-12">

        <p className="col-span-6 text-xl font-thin text-justify text-gray-50">{servico.servico.Descricao}</p>

        <div className="flex flex-col col-span-6 gap-4 pl-12 text-gray-50">

          <span className="text-2xl font-bold font-Montserrat">Dados do Prestador</span>

          <div className="flex items-center gap-2">
            <IoMdMail />
            <span className="text-xl font-thin">{servico.prestador.Email}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="text-xl font-thin">{servico.prestador.Telefone}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaHouse />
            <span className="text-xl font-thin">{`BL ${servico.prestador.Bloco}, APT ${servico.prestador.Apartamento}`}</span>
          </div>

          <div className="flex flex-col gap-6">
            <Button variant={"secondary"}
              className="px-12 mt-4 text-lg font-bold w-fit"
              onClick={() => {
                if(!solicitarBotao){
                  setSolicitarBotao(true)
                }
                else{
                  handlePedido()
                }
              }}
            >{!solicitarBotao ? 'Solicitar' : 'Confirmar'}
            </Button>
            {
              solicitarBotao &&
              <div>
                <span className="font-medium text-gray-50 font-Roboto">Descrição do pedido</span>
                <Input className="text-black max-w-96"
                onChange={(e) => setDescricaoInput(e.target.value)}></Input>
                
              </div>
            }
          </div>

        </div>

      </div>

      <div className="mt-24">

        <span className="text-3xl font-bold font-Montserrat text-gray-50">Avaliações</span>
        <hr />

        <div className="flex flex-col gap-16 pb-24 mt-12">

          {servico.avaliacoes.lenght > 0 ?
            servico.Avaliacoes.map((avaliacao, index: number) => (
              <div key={index} className=" text-gray-50">

                <span className="text-2xl font-thin font-Montserrat">{avaliacao.Unidade}</span>

                <div className="flex items-center gap-2">
                  <StarRating rating={avaliacao.Avaliacao} className="text-2xl text-gray-400" />
                  <span className="text-xl font-bold">{avaliacao.Categoria}</span>
                </div>

                <span className="italic text-gray-500">{avaliacao.DataRegistro}</span>

                <p className="w-64 text-justify">{avaliacao.Comentario}</p>

              </div>
            ))
            :
            <span className="italic opacity-50 text-gray-50 font-Roboto">Nenhuma avaliação encontrada</span>
          }

        </div>

      </div>

    </div>
  )
}
