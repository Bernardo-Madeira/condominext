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
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { usuarioType } from "../types/usuarioType"


export const columns: ColumnDef<usuarioType>[] = [
  {
    accessorKey: "Unidade",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Unidade
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
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
    accessorKey: "DataRegistro",
    header: "CRIAÇÃO"
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => {

      const [open, setOpen] = useState(false)

      const { original: solicitacao } = row

      const n = useNavigate()

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
                onClick={() => {}}/* DELETAR O USUARIO */
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