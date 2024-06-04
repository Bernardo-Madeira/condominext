import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { servicoStore } from "@/services/servicoService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { z } from "zod"



export default function CriarServicoForm() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const Usuario = useSelector((state: any) => state.auth.user)

  const criarServicoSchema = z.object({
    Nome: z.string().min(1, { message: "Campo obrigatório" }),
    Categoria: z.string().min(1, { message: "Campo obrigatório" }),
    Descricao: z.string().min(1, { message: "Campo obrigatório" }).max(255, {
      message: "O tamanho máximo da descrição é de 255 caracteres"
    })
  })

  const form = useForm<z.infer<typeof criarServicoSchema>>({
    resolver: zodResolver(criarServicoSchema),
    defaultValues: {
      Nome: "",
      Categoria: "",
      Descricao: ""
    },
  })

  const onSubmit = async (data: z.infer<typeof criarServicoSchema>) => {

    setLoading(true)

    const servico = {
      ...data,
      PrestadorID: Usuario.UsuarioID
    }

    try {

      const response = await servicoStore(servico)

      if (response.ServicoID) {
        navigate('/home')
      } else {
        alert(response.message)
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }

  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-12">

        <div className="grid grid-cols-12 col-span-12 gap-12 mt-12">

          {/* NOME */}
          <FormField
            control={form.control}
            name="Nome"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Nome do Serviço</FormLabel>
                <FormControl>
                  <Input {...field} />
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
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Categoria do Serviço</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Unidade</FormLabel>
                <FormControl>
                  <Input disabled={true} value={`BLC ${Usuario.Bloco}, APT ${Usuario.Apartamento}`} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Telefone</FormLabel>
                <FormControl>
                  <Input placeholder={Usuario.Telefone} disabled={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Email</FormLabel>
                <FormControl>
                  <Input placeholder={Usuario.Email} disabled={true} />
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
            <FormItem className="col-span-8 ">
              <div className="flex items-center gap-2 font-bold font-Roboto">
                <FormLabel className=" text-gray-50">Descrição do Serviço</FormLabel>
                <span className="text-sm text-gray-50">({255 - field.value.length})</span>
              </div>
              <FormControl>
                <Textarea {...field} className="resize-none min-h-40" maxLength={255} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-12 text-center">
          <Button type="submit"
            disabled={loading}
            className="px-12 mt-4 text-lg"
            variant={"secondary"

            }>Criar</Button>
        </div>

      </form>
    </FormProvider>
  )

}