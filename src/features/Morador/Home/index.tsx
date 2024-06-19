import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Loading from "@/components/Loading";
import { getAllServicos } from "@/services/servicoService";

export const StarRating = ({ rating, className = '' }: { rating: number, className: string }) => {

  const renderStar = (index: number) => {
    if (rating >= index + 1) {
      return <IoIosStar key={index} className={className} />;
    } else if (rating > index && rating < index + 1) {
      if (rating - index >= 0.75) {
        return <IoIosStar key={index} className={className} />;
      } else if (rating - index >= 0.25) {
        return <IoIosStarHalf key={index} className={className} />;
      }
    }
    return <IoIosStarOutline key={index} className={className} />;
  };

  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
    </div>
  );
};

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    getAllServicos()
      .then((res) => {
        setServices(res);
        setLoading(false);
        console.log(services)
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      })
  }, [])

  // Function to handle input change and update searchQuery state
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtered services based on searchQuery
  const filteredServices = services.filter((service) =>
    service.Nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-12">
      <div className="flex justify-between w-full border-2 rounded-sm">
        <input
          type="text"
          className="w-full p-2 px-2 bg-transparent rounded-sm outline-none text-gray-50 border-gray-50 animate-pulse focus:animate-none"
          placeholder="Buscar pelo nome do serviço"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="grid w-full grid-cols-4 gap-4 py-8 ">
        {loading ? (
          <div className="flex items-center justify-center w-full h-64">
            <Loading />
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="w-full text-center">
            <span className="mt-4 text-xl italic text-gray-400">Sem serviços disponíveis.</span>
          </div>
        ) : (
          filteredServices.map(({ ServicoID, Nome, Descricao, Media, Categoria }, index) => (
            <Link key={index} to={`/servico/${ServicoID}`}>
              <div
                key={index}
                className="flex flex-col col-span-1 gap-3 p-3 bg-white rounded-lg shadow-lg min-h-52 max-h-52"
              >
                <span className="font-bold text-gray-700 xl:text-2xl font-Montserrat lg:text-lg">
                  {Nome}
                </span>

                <p className="text-sm w-[90%] h-24 max-h-24 text-justify text-gray-500 overflow-hidden">
                  {Descricao}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StarRating rating={Media || 0} />
                    <span className="text-xl font-thin">{Media}</span>
                  </div>
                  <div className="flex items-center px-2 py-1 bg-gray-900 rounded-full">
                  <span className="text-xs italic font-bold text-gray-50 font-Montserrat">
                    {Categoria}
                  </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
