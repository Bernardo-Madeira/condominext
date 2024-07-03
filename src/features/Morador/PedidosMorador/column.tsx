import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface RowData {
  Nome: string
  Categoria: string
  Estado: string
  DataPedido: string
  PedidoID: string
  AvaliacaoID: string | null
}

const AvaliarCell = ({ row }: { row: { original: RowData } }) => {
  const navigate = useNavigate()

  const handleAvaliarClick = () => {
    navigate(`/pedidosMorador/${row.original.PedidoID}`)
  }

  if (row.original.Estado === "Concluído" && row.original.AvaliacaoID === null) {
    return (
      <div className="flex justify-end">
        <Button variant={"secondary"} className="h-9" onClick={handleAvaliarClick}>
          Avaliar
        </Button>
      </div>
    )
  } else if (row.original.AvaliacaoID) {
    return (
      <div className="flex justify-end opacity-80">
        <div className="px-3 py-1 font-medium rounded bg-emerald-600 w-fit">Avaliado</div>
      </div>
    )
  }

  return null
}

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "Nome",
    header: () => <p className="text-left">SERVIÇO</p>,
    cell: ({ row }) => <p className="text-left">{row.original.Nome}</p>
  },
  {
    accessorKey: "Categoria",
    header: "CATEGORIA"
  },
  {
    accessorKey: "Estado",
    header: "STATUS",
    cell: ({ row }) => (
      <div>
        {row.original.Estado}
      </div>
    )
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
      return <div>{dataFormatada}</div>
    }
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">AVALIAR</div>,
    cell: ({ row }) => <AvaliarCell row={row} />
  }
]
