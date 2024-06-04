import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FormProvider, useForm } from "react-hook-form"



export default function CriarServicoForm() {


  const form = useForm({
    defaultValues: {
      titulo: '',
      categoria: '',
      descricao: '',
    },
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={() => { }} className="grid grid-cols-12 gap-12">

        <div className="grid grid-cols-12 col-span-12 gap-12 mt-12">

          {/* TÍTULO */}
          <FormField
            control={form.control}
            name="titulo"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Título do Serviço</FormLabel>
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
            name="categoria"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Categoria do Serviço</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ID01">Conserto de Eletrônicos</SelectItem>
                      <SelectItem value="ID02">Pintura de Paredes</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Unidade"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Unidade</FormLabel>
                <FormControl>
                  <Select {...field} disabled={true} >
                    <SelectTrigger >
                      <SelectValue placeholder="BLC 1, APT 200"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Telefone"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(21)99999-9999" disabled={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel className=" text-gray-50">Email</FormLabel>
                <FormControl>
                  <Input placeholder="admin@admin.com" disabled={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* DESCRIÇÃO */}
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormLabel className=" text-gray-50">Descrição do Serviço</FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none min-h-40" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





        <div className="col-span-12 text-center">
          <Button type="submit" className="px-12 mt-4 text-lg" variant={"secondary"}>Criar</Button>
        </div>

      </form>
    </FormProvider>
  )

}