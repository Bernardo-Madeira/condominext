import { ServicoType } from "../Servico/type"

export async function getAllServicesByUser(userId: string) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let response: ServicoType[] = []

      if (userId === "1") {

        response = [
          {
            Titulo: "Serviço de Limpeza Residencial",
            Descricao:
              "Oferecemos serviços de limpeza completos para sua casa, incluindo quartos, salas, banheiros e cozinhas. Nossos profissionais são treinados e de confiança.",
            ImagemPerfil: null,
            Moradia: "BLC 5, APT 402",
            IdServico: '1'
          },
          {
            Titulo: "Manutenção de Jardins",
            Descricao:
              "Cuidamos do seu jardim com serviços de poda, irrigação e paisagismo. Garantimos que seu espaço verde esteja sempre bonito e saudável.",
            ImagemPerfil: null,
            Moradia: "BLC 7, APT 105",
            IdServico: '2'
          },
          {
            Titulo: "Aulas de Yoga",
            Descricao:
              "Aulas de yoga para todos os níveis, conduzidas por instrutores certificados. Venha melhorar sua flexibilidade, força e bem-estar geral.",
            ImagemPerfil: null,
            Moradia: "BLC 3, APT 210",
            IdServico: '3'
          },
        ]

      }
      resolve(response)
    }, 2000) 
  })
}
