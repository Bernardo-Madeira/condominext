import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaEye, FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { pedidoUpdate } from "@/services/pedidoService"

const handleUpdatePedido = async (PedidoID, Status) => {
  const body = {
    PedidoID,
    Estado: Status
  }
  return await pedidoUpdate(body)
}

export const columns: ColumnDef[] = [
  {
    accessorKey: "ServicoNome",
    header: () => {
      return <p className="text-left">SERVIÇO</p>
    },
    cell: ({ row }) => {
      return <p className="text-left">{row.original.ServicoNome}</p>
    }
  },
  {
    accessorKey: "MoradorEmail",
    header: "MORADOR - EMAIL"
  },
  {
    accessorKey: "MoradorTelefone",
    header: "MORADOR - TELEFONE",
    cell: ({ row }) => {
      return (
        <a href={`https://api.whatsapp.com/send?phone=+55${row.original.MoradorTelefone.replace("(", '').replace(")", "")}`} target="_blank"
        className="underline transition-colors hover:text-emerald-600">
          {row.original.MoradorTelefone}
        </a>
      )
    }
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
      const dia = data.getUTCDate()
      const mes = data.getUTCMonth() + 1
      const ano = data.getUTCFullYear()
      const dataFormatada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano}`
      return dataFormatada
    }
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => {
      const [open, setOpen] = useState(false)
      const { toast } = useToast()
      const { original } = row
      const navigate = useNavigate()
      const [updateCounter, setUpdateCounter] = useState(0) // Estado para forçar re-renderização

      if (original.Estado != 'Concluído') {
        return (
          <div className="text-right">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-8 h-8 p-0">
                  <span className="sr-only">Abrir menu</span>
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className="cursor-pointer"
                  asChild
                >
                  {
                    original.Estado == "Pendente" ?
                      <Button variant={'ghost'} className="w-full font-Montserrat" onClick={async () => {
                        const res = await handleUpdatePedido(original.PedidoID, "Execução")
                        toast({
                          description: res.message
                        })
                        setUpdateCounter(prev => prev + 1) // Atualiza o estado para forçar a re-renderização
                      }}>Executar</Button>
                      : original.Estado == 'Execução' ?
                        <Button variant={'ghost'} className="w-full font-Montserrat" onClick={async () => {
                          const res = await handleUpdatePedido(original.PedidoID, "Concluído")
                          toast({
                            description: res.message
                          })
                          setUpdateCounter(prev => prev + 1) // Atualiza o estado para forçar a re-renderização
                        }}>Concluir</Button>
                        : ""
                  }
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      } else {
        return <p></p>
      }
    }
  }
]
