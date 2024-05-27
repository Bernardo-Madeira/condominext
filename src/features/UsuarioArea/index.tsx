import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function UsuarioArea() {

const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 p-12 font-Roboto">

      <div>
        <span className=" text-gray-50">Unidade</span>
        <Input className="w-64" disabled={true} defaultValue={"BLC, 1, APT 200"} />
      </div>

      <div>
        <span className=" text-gray-50">Email</span>
        <Input className="w-64" type="email" defaultValue={"admin@admin.com"}/>
      </div>

      <div>
        <span className=" text-gray-50">Telefone</span>
        <Input className="w-64" defaultValue={"(21)99999-9999"} />
      </div>

      <div>
        <span className=" text-gray-50">Senha</span>
        <Input className="w-64" type="password" defaultValue={"admin"}/>
      </div>

      <div>
        <span className=" text-gray-50">Confirmar Senha</span>
        <Input className="w-64"type="password" defaultValue={""} />
      </div>

      <Button variant={"secondary"} onClick={() => navigate("/home")} className="px-12 text-lg font-bold">
        Atualizar
      </Button>

    </div>
  )
}

/*     Telefone: "",
    Email: "",
    Senha: "",
    ConfirmacaoSenha: "" */