import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { usuarioLogin } from "@/services/usuarioService"
import { useDispatch } from "react-redux"
import { login } from "@/store"


export default function LoginForm() {

  const [loading, setLoading] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginSchema = z.object({
    Email: z.string(),
    Senha: z.string()
  })

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      Email: "",
      Senha: ""
    },
  })

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {

    setLoading(true)

    try {

      const response = await usuarioLogin(data)

      if (response.UsuarioID) {
        dispatch(login(response))
        console.log(response)
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-72">
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
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
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input type={passwordVisible ? 'text' : 'password'} {...field} />
                  {passwordVisible ?
                    <FaRegEyeSlash className="text-2xl cursor-pointer"
                      onClick={() => setPasswordVisible(false)} />
                    :
                    <FaRegEye className="text-2xl cursor-pointer"
                      onClick={() => setPasswordVisible(true)} />
                  }
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button disabled={loading} type="submit" className="px-12 mt-4 text-lg">Entrar</Button>
        </div>
      </form>
    </FormProvider>
  )
}
