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
      imagens: []
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
                      <SelectItem value="tipo1">Tipo 1</SelectItem>
                      <SelectItem value="tipo2">Tipo 2</SelectItem>
                      <SelectItem value="tipo3">Tipo 3</SelectItem>
                      <SelectItem value="tipo4">Tipo 4</SelectItem>
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
          name="descricao"
          render={({ field }) => (
            <FormItem className="col-span-8">
              <FormLabel className=" text-gray-50">Descrição do Serviço</FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none min-h-40" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel className="text-gray-50">Imagens de Apoio</FormLabel>
              <FormControl>
                <Input {...field} type="file" multiple />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <div className="text-center">
          <Button type="submit" className="px-12 mt-4 text-lg" variant={"secondary"}>Entrar</Button>
        </div>

      </form>
    </FormProvider>
  )

}