import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usuarioShow, usuarioUpdate } from "@/services/usuarioService";
import { login } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export default function UsuarioArea() {

  const Usuario = useSelector((state: any) => state.auth.user)

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const updateUsuarioSchema = z.object({
    Email: z.string(),
    Senha: z.string(),
    Bloco: z.string(),
    Apartamento: z.string(),
    Telefone: z.string(),
    ConfirmarSenha: z.string(),
  })

  const defaultValues = {
    Email: Usuario?.Email || '',
    Senha: '',
    Bloco: Usuario.Bloco || '',
    Apartamento: Usuario.Apartamento || '',
    Telefone: Usuario.Telefone || '',
    ConfirmarSenha: '',
  }

  const form = useForm<z.infer<typeof updateUsuarioSchema>>({
    resolver: zodResolver(updateUsuarioSchema),
    defaultValues: defaultValues,
  })

  const onSubmit = async (data: z.infer<typeof updateUsuarioSchema>) => {
    setLoading(true)
    const body = {
      ...data,
      UsuarioID: Usuario.UsuarioID
    }

    try {

      const response = await usuarioUpdate(body)

      if (response.message) {
        usuarioShow(Usuario.UsuarioID).then((res) => {
          console.log(res)
          dispatch(login(res))
          navigate('/home')
        })
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
    <div className="flex flex-col items-center gap-12 px-12 pt-12">
      <span className="text-4xl font-bold font-Montserrat text-gray-50">Área do usuário</span>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-72">
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-50">Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Telefone"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="text-gray-50">Telefone</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input type="text" {...field} value={field.value}/>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Bloco"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="text-gray-50">Bloco</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input type="text" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Apartamento"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="text-gray-50">Apartamento</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input type="text" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Senha"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="text-gray-50">Senha</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input type="text" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ConfirmarSenha"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="text-gray-50">Confirmar Senha</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input type="text" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center">
            <Button disabled={loading}
              type="submit"
              variant={"secondary"}
              className="px-12 mt-8 text-lg">Atualizar</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )

}
