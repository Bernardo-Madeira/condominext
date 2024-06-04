import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarRating } from "../Home";
import { getUniqueService } from "../Servico/servicoService";
import { ServicoSelecionadoType } from "./types";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";

const getDataService = async (id: string) => {
  return await getUniqueService(id);
}

export default function ServicoSelecionado() {
  const [servico, setServico] = useState<ServicoSelecionadoType | null>(null);
  const { idServico } = useParams<{ idServico: string }>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (idServico) {
      getDataService(idServico).then(res => {
        setServico(res);
        setLoading(false)
      })
    }
  }, [idServico]);

  if (loading) {
    return <div className="flex items-center justify-center w-full h-64"><Loading /></div>
  }

  if (!servico) {
    return <div className="p-12"><p className="text-gray-50">Serviço não encontrado.</p></div>;
  }

  return (
    <div className="h-full p-12 font-Roboto">
      <span className="text-5xl font-bold text-gray-50 font-Montserrat">{servico.Titulo}</span>

      <div className="flex items-center gap-2 mt-4">
        <StarRating rating={servico.Avaliacao} className="text-3xl text-gray-50" />
        <span className="text-xl italic font-thin text-gray-50">{servico.TotalAvaliacoes} Avaliações</span>
      </div>

      <div className="grid grid-cols-12 gap-12 mt-12">

        <p className="col-span-6 text-xl font-thin text-justify text-gray-50">{servico.Descricao}</p>

        <div className="flex flex-col col-span-6 gap-4 pl-12 text-gray-50">

          <span className="text-2xl font-bold font-Montserrat">Dados do Prestador</span>

          <div className="flex items-center gap-2">
            <IoMdMail/>
            <span className="text-xl font-thin">{servico.Prestador.Email}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt/>
            <span className="text-xl font-thin">{servico.Prestador.Telefone}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaHouse/>
            <span className="text-xl font-thin">{servico.Unidade}</span>
          </div>

          <Button variant={"secondary"} className="px-12 mt-4 text-lg font-bold w-fit">Solicitar</Button>

        </div>

      </div>

      <div className="mt-24">

        <span className="text-3xl font-bold font-Montserrat text-gray-50">Avaliações</span>
        <hr />

        <div className="flex flex-col gap-16 pb-24 mt-12">

          {
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
          }

        </div>

      </div>

    </div>
  )
}
