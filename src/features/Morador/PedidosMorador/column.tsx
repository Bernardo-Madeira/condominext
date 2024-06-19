import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaEye, FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { pedidoUpdate } from "@/services/pedidoService"


export const columns: ColumnDef[] = [
  {
    accessorKey: "Nome",
    header: () => {
      return <p className="text-left">SERVIÇO</p>
    },
    cell: ({ row }) => {
      return <p className="text-left">{row.original.Nome}</p>
    }
  },
  {
    accessorKey: "Categoria",
    header: "CATEGORIA"
  },
  {
    accessorKey: "Status",
    header: "STATUS",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.Estado}
        </div>
      )
    }
  },
  {
    accessorKey: "DataPedido",
    header: "DATA PEDIDO",
    cell: ({ row }) => {
      const { original } = row
      const data = new Date(original.DataPedido)
      const dia = data.getUTCDate();
      const mes = data.getUTCMonth() + 1;
      const ano = data.getUTCFullYear();
      const dataFormatada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano}`
      return dataFormatada
    }
  },
  /* Exibir o botão avaliar quando estiver concluido */
  {
    accessorKey: "actions",
    header: () => <div className="text-right">AVALIAR</div>,
    cell: ({ row }) => {
      const [open, setOpen] = useState(false)
      const { toast } = useToast()
      const { original } = row
      const navigate = useNavigate()
      const [updateCounter, setUpdateCounter] = useState(0); // Estado para forçar re-renderização

      if(row.original.Estado == "Concluído"){
        return(
          <div className="flex justify-end">
            <Button variant={"secondary"} className="h-9"
            onClick={() => navigate(`/pedidosMorador/${original.PedidoID}`)}
            >Avaliar</Button>
          </div>
        )
      }

    }
  }
]
