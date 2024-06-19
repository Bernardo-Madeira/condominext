import { ColumnDef } from "@tanstack/react-table"

import { FaCheck } from "react-icons/fa"
import { useState } from "react"
import { prestadorUpdate } from "@/services/prestadorService"
import { useToast } from "@/components/ui/use-toast"



const handleConfirmSolicitacao = async (data) => {

  data = {
    ...data,
    Verificado: 1
  }

  return await prestadorUpdate(data)

}

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "Email",
    header: "EMAIL"
  },
  {
    accessorKey: "Telefone",
    header: "TELEFONE"
  },
  {
    accessorKey: "Usuario",
    header: "USUÁRIo"
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => {

      const [open, setOpen] = useState(false)
      const {toast} = useToast()

      const { original } = row

      return (
        <div className="flex justify-end ">
          <FaCheck className="text-xl transition-colors cursor-pointer text-gray-50 hover:text-gray-300"
            onClick={async() => {
              const resp = await handleConfirmSolicitacao(original)
              toast({
                description: "Prestador verificado com sucesso!"
              })
            }}
          />
        </div>
      )
    }
  }
]