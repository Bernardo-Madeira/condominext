import { useEffect, useState } from "react"
import { getAllServicesByUser } from "./homeService"
import { ServicoType } from "../Servico/type"

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const getAllServices = async (id: string) => {
  return await getAllServicesByUser(id)
}

export default function Home() {
  const [services, setServices] = useState<ServicoType[]>([])

  useEffect(() => {
    getAllServices('1').then(res => {
      setServices(res)
    })
  }, [])


  return (
    <div className="flex flex-col items-center p-12">

      <input type="text" className="w-full p-2 bg-transparent border-2 rounded-sm outline-none text-gray-50 border-gray-50" />

      <div className="flex flex-wrap items-start gap-4 py-8">

        {/* Ajustar o display */}
        {services.map((service, index) => (

          <Link key={index} to={`/servico/${service.IdServico}`}>
            <div key={index} className="flex flex-col justify-between p-3 bg-white rounded-lg shadow-lg min-h-60 max-h-60 w-80">

              <span className="h-12 text-2xl font-bold text-gray-700 font-Montserrat">{service.Titulo}</span>
              <p className="text-sm w-[90%] h-24 max-h-24 text-justify text-gray-500 my-2 overflow-hidden">{service.Descricao}</p>

              <div className="flex items-center gap-2">
                {service.ImagemPerfil ? (
                  <div>
                    {/* Adicionar imagem do perfil */}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
                    <FaUser className="text-2xl text-gray-50" />
                  </div>
                )}
                <span>{service.Moradia}</span>
              </div>
            </div>
          </Link>

        ))}

      </div>

    </div>
  )
}
