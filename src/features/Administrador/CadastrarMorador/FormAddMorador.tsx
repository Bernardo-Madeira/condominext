import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { maskPhoneNumber } from "@/lib/masks"
import { moradorStore } from "@/services/moradorService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"


export default function FormAddMorador() {

  const navigate = useNavigate()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const addMoradorSchema = z.object({
    Email: z.string().min(1, { message: "(Campo obrigatório)" }),
    Senha: z.string().min(1, { message: "(Campo obrigatório)" }),
    ConfirmarSenha: z.string().min(1, { message: "(Campo obrigatório)" }),
    Bloco: z.string().min(1, { message: "(Campo obrigatório)" }),
    Apartamento: z.string().min(1, { message: "(Campo obrigatório)" }),
    Usuario: z.string().min(1, { message: "(Campo obrigatório)" }),
    Telefone: z.string().min(14, { message: "(Campo obrigatório)" })
  })


  const form = useForm<z.infer<typeof addMoradorSchema>>({
    resolver: zodResolver(addMoradorSchema),
    defaultValues: {
      Email: '',
      Senha: '',
      ConfirmarSenha: '',
      Bloco: '',
      Apartamento: '',
      Usuario: '',
      Telefone: ''
    },
  })

  const onSubmit = async (data: z.infer<typeof addMoradorSchema>) => {
    console.log(data)

    if(data.Senha != data.ConfirmarSenha){
      toast({
        title: 'Os campos "Senha" e "Confirmar Senha" devem ser iguais',
        variant: 'destructive'
      })
    }

    else{
      const response = await moradorStore(data)
      if(response.MoradorID){
        toast({
          description:"Morador cadastrado com sucesso"
        })
      }
      else{
        toast({
          description: "Falha ao cadastrar morador",
          variant: "destructive"
        })
      }
    }

  }

  return (

    <FormProvider {...form}>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[44rem] h-[36rem] rounded shadow-sm flex shadow-gray-900">

        <div className="w-6/12 px-12 bg-gray-800">

          <div className="flex justify-center w-full mt-8 mb-24">
            <span className="text-5xl font-Montserrat text-gray-50">Cadastro</span>
          </div>

          <div className="flex flex-col gap-6">

            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-50">Email</FormLabel>
                    <FormMessage />
                  </div>

                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>

                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Senha"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-50">Senha</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ConfirmarSenha"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-50">Confirmar Senha</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                </FormItem>
              )}
            />

            <div className="text-center">
              <Button 
              disabled={loading}
              variant={"secondary"}
               type="submit"
                className="px-8 mt-4 text-lg">Cadastrar</Button>
            </div>

          </div>

        </div>

        <div className="w-6/12 px-12 bg-gray-50">

          <div className="flex justify-center w-full mt-8 mb-24">
            <span className="text-5xl text-gray-800 font-Montserrat">Morador</span>
          </div>

          <div className="flex flex-col gap-6">

            <FormField
              control={form.control}
              name="Telefone"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-800">Telefone</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input {...field}
                      variant="secondary"
                      value={field.value}
                      maxLength={14}
                      onChange={e => {
                        e.target.value = maskPhoneNumber(e.target.value)
                        field.onChange(e)
                      }}
                    />
                  </FormControl>

                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Usuario"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-800">Usuário</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input variant="secondary" {...field} />
                  </FormControl>

                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Bloco"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-800">Bloco</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input maxLength={5} variant="secondary" {...field} />
                  </FormControl>

                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Apartamento"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-gray-800">Apartamento</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input maxLength={5} variant="secondary" {...field} />
                  </FormControl>

                </FormItem>
              )}
            />

          </div>

        </div>

      </form>

      <Toaster/>

    </FormProvider>
  )
}