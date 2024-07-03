import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { avaliacaoStore } from "@/services/avaliacaoService"
import { servicoStore } from "@/services/servicoService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { z } from "zod"

export default function FormAvaliacao() {
  const [loading, setLoading] = useState(false)
  const Usuario = useSelector((state: any) => state.auth.user)
  const navigate = useNavigate()
  const { PedidoID } = useParams()
  const { toast } = useToast()

  const avaliarPedidoSchema = z.object({
    PedidoID: z.number(),
    MoradorID: z.number(),
    Nota: z.number(),
    Descricao: z.string(),
  })

  const [nota, setNota] = useState(0)
  const [descricao, setDescricao] = useState("Péssimo")

  const form = useForm<z.infer<typeof avaliarPedidoSchema>>({
    resolver: zodResolver(avaliarPedidoSchema),
    defaultValues: {
      PedidoID: parseInt(PedidoID!),
      MoradorID: Usuario.usuario.MoradorID,
      Nota: 0,
      Descricao: "Péssimo",
    },
  })

  const onSubmit = async (data: z.infer<typeof avaliarPedidoSchema>) => {

    setLoading(true)

    try {
      const response = await avaliacaoStore(data)
      setLoading(false)

      if (response.AvaliacaoID) {
        navigate(-1)
      } else {
        toast({
          title: "Erro",
          description: "Falha ao avaliar pedido. Tente novamente mais tarde.",
          variant: "destructive"
        })
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleNota = (index: number, checked: boolean) => {
    const newNota = checked ? nota + 1 : nota - 1
    setNota(newNota)

    const avaliacoes = [
      "Péssimo",
      "Ruim",
      "Regular",
      "Bom",
      "Ótimo",
      "Excelente",
    ]
    setDescricao(avaliacoes[newNota])
    form.setValue("Descricao", avaliacoes[newNota])
    form.setValue("Nota", newNota)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-8 text-center">
          <span className="text-4xl text-center font-Montserrat">
            Avaliação
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              onChange={(e) => handleNota(0, e.target.checked)}
            />
            <span>O serviço foi concluído conforme o combinado</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              onChange={(e) => handleNota(1, e.target.checked)}
            />
            <span>Prestador demonstrou profissionalismo durante todo o processo</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              onChange={(e) => handleNota(2, e.target.checked)}
            />
            <span>Recebi todas as informações necessárias sobre o serviço</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              onChange={(e) => handleNota(3, e.target.checked)}
            />
            <span>Qualidade do serviço atendeu às expectativas</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              onChange={(e) => handleNota(4, e.target.checked)}
            />
            <span>Facilidade de comunicação com o prestador do serviço</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Input
            className="w-64"
            variant="secondary"
            placeholder="Digite sua descrição..."
            value={descricao}
            onChange={(e) => {setDescricao(e.target.value); form.setValue("Descricao", e.target.value)}}
          />
        </div>

        <div className="flex items-center justify-center w-full text-center">
          <Button
            type="submit"
            disabled={loading}
            className="px-10 mt-4 text-lg"
          >
            Avaliar
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
