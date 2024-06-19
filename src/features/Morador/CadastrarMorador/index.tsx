import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { maskPhoneNumber } from "@/lib/masks"
import { moradorStore } from "@/services/moradorService"
import { prestadorStore } from "@/services/prestadorService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"


export default function CadastrarPrestador() {

  const navigate = useNavigate()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const addPrestadorSchema = z.object({
    Email: z.string().min(1, { message: "(Campo obrigatório)" }),
    Senha: z.string().min(1, { message: "(Campo obrigatório)" }),
    ConfirmarSenha: z.string().min(1, { message: "(Campo obrigatório)" }),
    Usuario: z.string().min(1, { message: "(Campo obrigatório)" }),
    Telefone: z.string().min(14, { message: "(Campo obrigatório)" })
  })

  const form = useForm<z.infer<typeof addPrestadorSchema>>({
    resolver: zodResolver(addPrestadorSchema),
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

  const onSubmit = async (data: z.infer<typeof addPrestadorSchema>) => {

    if (data.Senha != data.ConfirmarSenha) {
      toast({
        title: 'Os campos "Senha" e "Confirmar Senha" devem ser iguais',
        variant: 'destructive'
      })
    }
    
    else {
      try{
        const response = await prestadorStore(data)
        if(response.message){
          toast({
            title: "Erro ao cadastrar prestador",
            description: response.message,
            variant: "destructive"
          })
        }
        else{
          toast({
            title: "Prestador cadastrado com sucesso!",
            description: "Redirecionamento automático em 3 segundos",
          })
          setTimeout(() => {
            navigate('/home')
          }, 3000);
        }
      }
      catch(e){
        console.log(e)
      }
    }

  }

  return (
    <div className="flex items-center justify-center w-full h-full p-12">

      <FormProvider {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[26rem] h-[44rem] rounded shadow-sm flex shadow-gray-900">

          <div className="px-12 bg-gray-800 shadow-sm shadow-gray-800">

            <div className="flex justify-center w-full mt-8 mb-12 text-center">
              <span className="text-4xl font-Montserrat text-gray-50">Cadastro Prestador</span>
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

              <FormField
                control={form.control}
                name="Telefone"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-gray-50">Telefone</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input {...field}
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
                      <FormLabel className="text-gray-50">Usuário</FormLabel>
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

        </form>

      </FormProvider>

    </div>
  )
}