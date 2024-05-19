import { FormProvider, useForm } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserFormType } from "./LoginType"
/* import { z } from 'zod' */

type LoginFormProps = {
  onSubmit: (data: UserFormType) => void,
  loading: boolean
}

export default function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const form = useForm<UserFormType>({
    defaultValues: {
      usuario: '',
      senha: '',
    },
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-72">
        <FormField
          control={form.control}
          name="usuario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="senha"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
        <Button disabled={loading} type="submit" className="text-lg px-12 mt-4">Entrar</Button>
        </div>
      </form>
    </FormProvider>
  )
}
