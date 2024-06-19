import { DataTable } from "@/components/DataTable";
import { pedidoIndex } from "@/services/pedidoService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { columns } from "./column";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Loading from "@/components/Loading";
import FormAvaliacao from "./FormAvaliacao";

export default function PedidosMorador() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(false);
  const Usuario = useSelector((state) => state.auth.user);
  const { PedidoID } = useParams<{ PedidoID: string }>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (PedidoID) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }, [PedidoID]);

  useEffect(() => {
    setLoading(true);
    pedidoIndex(Usuario?.usuario?.MoradorID).then((res) => {
      setPedidos(res);
      setLoading(false);
    });
  }, [Usuario?.usuario?.MoradorID]);

  return (
    <div className="relative h-full">
      {modalIsOpen && (
        <div
          className="absolute z-10 flex items-center justify-center w-full h-full p-12 "
          style={{ backgroundColor: "rgb(17, 24, 39, 0.85)" }}
        >
          <IoClose
            className="absolute text-5xl cursor-pointer top-2 right-2 text-gray-50"
            onClick={() => setModalIsOpen(false)}
          />
          <div className="p-6 rounded bg-gray-50 w-[32rem] h-96 shadow shadow-gray-400">
            <FormAvaliacao />
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
  );
}
