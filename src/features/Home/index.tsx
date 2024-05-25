import { useEffect, useState } from "react"
import { getAllServicesByUser } from "../Servico/servicoService"
import { ServicoType } from "../Servico/type"

import { Link } from "react-router-dom"

import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io"
import { FaSearch } from "react-icons/fa"

export const StarRating = ({ rating, className='' }: { rating: number, className: string }) => {

  const renderStar = (index: number) => {

    if (rating >= index + 1) {
      return <IoIosStar key={index} className={className}/>
    }

    else if (rating > index && rating < index + 1) {
      if (rating - index >= 0.75) {
        return <IoIosStar key={index} className={className}/>
      } else if (rating - index >= 0.25) {
        return <IoIosStarHalf key={index} className={className}/>
      }
    }

    return <IoIosStarOutline key={index} className={className}/>

  }

  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
    </div>
  )

}


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

      <div className="flex justify-between w-full border-2 rounded-sm">
        <input type="text" className="w-full p-2 px-2 bg-transparent outline-none border-b-2rounded-sm border-gray-50 text-gray-50" placeholder="Buscar por título de serviço"/>
        <div className="flex items-center justify-center w-12 text-2xl text-gray-900 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-900 hover:text-gray-50">
          <FaSearch />
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-4 py-8">

        {/* Ajustar o display */}
        {services.map((service, index) => (

          <Link key={index} to={`/servico/${service.IdServico}`}>

            <div key={index} className="flex flex-col gap-3 p-3 bg-white rounded-lg shadow-lg min-h-52 max-h-52 w-80">

              <span className="text-2xl font-bold text-gray-700 font-Montserrat">{service.Titulo}</span>

              <p className="text-sm w-[90%] h-24 max-h-24 text-justify text-gray-500 overflow-hidden">{service.Descricao}</p>

              <div className="flex items-center justify-between">

                <span className="font-bold font-Montserrat">{service.Moradia}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xl italic font-thin">{service.TotalAvaliacoes}</span>
                  <StarRating rating={service.Avaliacao} />
                </div>

              </div>

            </div>
          </Link>

        ))}

      </div>

    </div>
  )
}
