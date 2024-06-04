import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FaEye } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { TAsolicitacao } from "../types"


export const columns: ColumnDef<TAsolicitacao>[] = [
  {
    accessorKey: "nomeServico",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          SERVIÇO
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
  },
  {
    accessorKey: "unidade",
    header: "UNIDADE"
  },
  {
    accessorKey: "telefone",
    header: "TELEFONE"
  },
  {
    accessorKey: "email",
    header: "EMAIL"
  },
  {
    accessorKey: "status",
    header: "STATUS"
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
                onClick={() => n(`../servico/${solicitacao.idSolicitacao}`)}
                asChild
              >
                <Button variant={'ghost'} className="w-full"><FaEye className="mr-2" />Abrir</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]