import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { servicoStore } from "@/services/servicoService"
import { categoriasServico } from "@/utils/options"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";


export default function FormAvaliacao() {

  const [loading, setLoading] = useState(false)

  const Usuario = useSelector((state: any) => state.auth.user)
  const { toast } = useToast()

  const criarServicoSchema = z.object({
    PedidoID: z.string(),
    MoradorID: z.string(),
    Nota: z.number().min(1, { message: "Campo obrigatório" }),
    Descricao: z.string().max(255, {
      message: "O tamanho máximo da descrição é de 255 caracteres"
    })
  })

  const form = useForm<z.infer<typeof criarServicoSchema>>({
    resolver: zodResolver(criarServicoSchema),
    defaultValues: {
      PedidoID: "",
      MoradorID: "",
      Nota: "",
      Descricao: ""
    },
  })

  const onSubmit = async (data: z.infer<typeof criarServicoSchema>) => {

    setLoading(true)

    const servico = {
      ...data,
      PrestadorID: Usuario.usuario.PrestadorID
    }

    try {
      console.log(servico)

      const response = await servicoStore(servico)
      console.log(response)

      if (response.ServicoID) {
        toast({
          description: "Serviço cadastrado com sucesso!"
        })
        setModalIsOpen(false)
      } else {
        toast({
          description: response.message
        })
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }

  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >

        <div className="grid grid-cols-12 col-span-12 gap-6 py-4">

          {/* NOME */}
          <FormField
            control={form.control}
            name="Nome"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel >Nome do Serviço</FormLabel>
                <FormControl>
                  <Input {...field} variant="secondary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CATEGORIA */}
          <FormField
            control={form.control}
            name="Categoria"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel >Categoria do Serviço</FormLabel>
                <FormControl>
                  <Select onValueChange={(e) => form.setValue("Categoria", e)}>
                    <SelectTrigger className="bg-gray-800 text-gray-50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {
                          categoriasServico.map((c, index) => (
                            <SelectItem key={index} value={c}>{c}</SelectItem>
                          ))
                        }
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* DESCRIÇÃO */}
        <FormField
          control={form.control}
          name="Descricao"
          render={({ field }) => (
            <FormItem >
              <div className="flex items-center gap-1 font-bold font-Roboto">
                <FormLabel className="font-bold">Descrição do Serviço</FormLabel>
                <span className="text-sm">({255 - field.value.length})</span>
              </div>
              <FormControl>
                <Textarea {...field} className="bg-gray-900 resize-none min-h-32 text-gray-50" maxLength={255} />
              </FormControl>

            </FormItem>
          )}
        />

        <div className="flex items-center justify-center w-full text-center">
          <Button type="submit"
            disabled={loading}
            className="px-12 mt-4 text-lg"
          >Criar</Button>
        </div>
          
      </form>
    </FormProvider>
  )

}