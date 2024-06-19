import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FaTrash } from "react-icons/fa"
import { useState } from "react"
import { usuarioType } from "@/types/usuarioType"
import { moradorDestroy } from "@/services/moradorService"
import { toast, useToast } from "@/components/ui/use-toast"

const handleDestroyMorador = async (MoradorID: string) => {

  return await moradorDestroy(MoradorID)

}


export const columns: ColumnDef<usuarioType>[] = [
  {
    accessorKey: "Bloco",
    header: "BLOCO"
  },
  {
    accessorKey: "Apartamento",
    header: "APARTAMENTO"
  },
  {
    accessorKey: "Telefone",
    header: "TELEFONE"
  },
  {
    accessorKey: "Email",
    header: "EMAIL"
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => {

      const [open, setOpen] = useState(false)
      const toaste = useToast()

      const { original } = row

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
                onClick={async() => { 
                  const resp = await handleDestroyMorador(original.MoradorID)
                  toast({
                    description: resp.message
                  })
                }}
                asChild
              >
                <Button variant={'ghost'} className="w-full"><FaTrash className="mr-2" />Excluir</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]