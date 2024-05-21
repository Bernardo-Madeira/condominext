import CriarServicoForm from "./CriarServicoForm";



export default function CriarServico(){

  /* Pergar os dados do usuário com redux para criar */

  return(
    <div className="p-12">

      <span className="text-4xl text-gray-50 font-bold">Criar Serviço</span>

      <CriarServicoForm/>
      
    </div>
  )

}