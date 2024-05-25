import { TAsolicitacao } from "./types"



export async function getAllSolicitacoes(userId: string) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let response: TAsolicitacao[] = []

      if (userId === "1") {

        response = [

          {
            nomeServico: "Conserto de computador",
            unidade: "BL 1, APT 202",
            telefone: "(21)99222-2222",
            email: "joao.gabriel@gmail.com",
            status: "Pendente",
            idSolicitacao: 1
          },
          {
            nomeServico: "Instalação de software",
            unidade: "BL 2, APT 303",
            telefone: "(21)99333-3333",
            email: "maria.silva@gmail.com",
            status: "Execução",
            idSolicitacao: 2
          },
          {
            nomeServico: "Troca de tela de notebook",
            unidade: "BL 3, APT 404",
            telefone: "(21)99444-4444",
            email: "carlos.souza@gmail.com",
            status: "Pausado",
            idSolicitacao: 3
          },
          {
            nomeServico: "Configuração de rede",
            unidade: "BL 4, APT 505",
            telefone: "(21)99555-5555",
            email: "ana.costa@gmail.com",
            status: "Concluído",
            idSolicitacao: 4
          }

        ]


      }

      resolve(response)
    }, 2000)
  })
}