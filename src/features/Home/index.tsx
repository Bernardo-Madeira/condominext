import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io"
import { FaSearch } from "react-icons/fa"
import Loading from "@/components/Loading"
import { servicoIndex } from "@/services/servicoService"


export const StarRating = ({ rating, className = '' }: { rating: number, className: string }) => {

  const renderStar = (index: number) => {

    if (rating >= index + 1) {
      return <IoIosStar key={index} className={className} />
    }

    else if (rating > index && rating < index + 1) {
      if (rating - index >= 0.75) {
        return <IoIosStar key={index} className={className} />
      } else if (rating - index >= 0.25) {
        return <IoIosStarHalf key={index} className={className} />
      }
    }

    return <IoIosStarOutline key={index} className={className} />

  }

  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
    </div>
  )

}


export default function Home() {

  const [services, setServices] = useState<[]>([])
  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    setLoading(true)
    servicoIndex().then(res => console.log())
    setLoading(false)
  }, [])

  return (
    <div className="flex flex-col items-center p-12">

      <div className="flex justify-between w-full border-2 rounded-sm">
        <input type="text" className="w-full p-2 px-2 bg-transparent outline-none border-b-2rounded-sm border-gray-50 text-gray-50" placeholder="Buscar por título de serviço" />
        <div className="flex items-center justify-center w-12 text-2xl text-gray-900 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-900 hover:text-gray-50">
          <FaSearch />
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-4 py-8">

        {
          loading ?
            <div className="flex items-center justify-center w-full h-64"><Loading /></div>
            :
            services && services.map(({ServicoID, Nome, Descricao, PrestadorID, Media }, index) => (

              <Link key={index} to={`/servico/${ServicoID}`}>

                <div key={index} className="flex flex-col gap-3 p-3 bg-white rounded-lg shadow-lg min-h-52 max-h-52 w-80">

                  <span className="text-2xl font-bold text-gray-700 font-Montserrat">{Nome}</span>

                  <p className="text-sm w-[90%] h-24 max-h-24 text-justify text-gray-500 overflow-hidden">{Descricao}</p>

                  <div className="flex items-center justify-between">



                  </div>

                </div>
              </Link>

            ))
        }

      </div>

    </div>
  )
}
