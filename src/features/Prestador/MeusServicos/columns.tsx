import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaTrash } from "react-icons/fa"
import { useState } from "react"

// Agora, `handleDelete` é uma propriedade que é passada para `columns`
export const columns = (handleDelete) => [
  {
    accessorKey: "Nome",
    header: () => <div className="text-left">NOME</div>,
    cell: ({ row }) => {
      const { original } = row
      return <div className="text-left">{original.Nome}</div>
    },
  },
  {
    accessorKey: "Categoria",
    header: "CATEGORIA",
  },
  {
    accessorKey: "Media",
    header: "MÉDIA AVALIAÇÕES",
    cell: ({ row }) => {
      const { original } = row
      return <div>{original.Media.toFixed(2)}</div>
    },
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => {
      const [open, setOpen] = useState(false)
      const { original } = row

      const handleDeleteClick = () => {
        setOpen(false) // Fecha o dropdown antes de executar a exclusão
        handleDelete(original.ServicoID) // Chama a função de deletar passada como prop
      }

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
              <DropdownMenuItem className="cursor-pointer" onClick={handleDeleteClick} asChild>
                <Button variant={"ghost"} className="w-full">
                  <FaTrash className="mr-2" />
                  Deletar
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
