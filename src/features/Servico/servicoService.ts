import { ServicoType } from "../Servico/type"
import { ServicoSelecionadoType } from "../ServicoSelecionado/types"

export async function getAllServicesByUser(userId: string): Promise<ServicoType[]> {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let response: ServicoType[] = []

      if (userId === "1") {

        response = [
          {
            Titulo: "Conserto de computador",
            Descricao:
              "Oferecemos serviços completos de conserto de computadores, incluindo diagnósticos, reparos de hardware e software, formatação e otimização de sistema. Nossos técnicos são altamente qualificados e utilizamos peças de reposição de alta qualidade para garantir a melhor performance possível do seu equipamento.",
            Unidade: "BL 1, APT 202",
            IdServico: '1',
            Avaliacao: 3,
            TotalAvaliacoes: '150'
          },
          {
            Titulo: "Instalação de software",
            Descricao:
              "Realizamos instalação de softwares diversos, desde sistemas operacionais a aplicativos específicos para as suas necessidades. Garantimos a compatibilidade e o bom funcionamento dos programas instalados, além de oferecer suporte para configuração e utilização.",
            Unidade: "BL 2, APT 303",
            IdServico: '2',
            Avaliacao: 4.7,
            TotalAvaliacoes: '89'
          },
          {
            Titulo: "Troca de tela de notebook",
            Descricao:
              "Oferecemos serviços especializados de troca de tela de notebooks, utilizando componentes originais e de alta qualidade. Nossos técnicos possuem vasta experiência em substituição de telas danificadas, garantindo um serviço rápido e eficiente.",
            Unidade: "BL 3, APT 404",
            IdServico: '3',
            Avaliacao: 4.9,
            TotalAvaliacoes: '200'
          },
          {
            Titulo: "Configuração de rede",
            Descricao:
              "Realizamos configuração completa de redes domésticas e empresariais, incluindo instalação de roteadores, switches e pontos de acesso. Nossa equipe é especializada em criar soluções de rede seguras e eficientes, adaptadas às suas necessidades específicas.",
            Unidade: "BL 4, APT 505",
            IdServico: '4',
            Avaliacao: 4.9,
            TotalAvaliacoes: '200'
          }
        ];

      }
      resolve(response);
    }, 2000);
  });
}



export async function getUniqueService(serviceId: string): Promise<ServicoSelecionadoType | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let response: ServicoSelecionadoType | null = null;

      if (serviceId === "1") {
        response = {
          Titulo: "Conserto de computador",
          Descricao:
            "Oferecemos serviços completos de conserto de computadores, incluindo diagnósticos, reparos de hardware e software, formatação e otimização de sistema. Nossos técnicos são altamente qualificados e utilizamos peças de reposição de alta qualidade para garantir a melhor performance possível do seu equipamento.",
          Unidade: "BL 1, APT 202",
          IdServico: '1',
          Avaliacao: 3,
          TotalAvaliacoes: '150',
          Prestador: {
            Telefone: '(21)99222-2222',
            Email: 'joao.gabriel@gmail.com'
          },
          Avaliacoes: [
            {
              Unidade: "BL 2, APT 200",
              Categoria: "Muito Bom",
              Avaliacao: 5,
              DataRegistro: '4 de fevereiro de 2024',
              Comentario: 'O serviço foi excelente, superou minhas expectativas.'
            },
            {
              Unidade: "BL 3, APT 301",
              Categoria: "Bom",
              Avaliacao: 4,
              DataRegistro: '10 de janeiro de 2024',
              Comentario: 'Muito bom serviço, mas poderia ser um pouco mais rápido.'
            }
          ]
        };
      } else if (serviceId === "2") {
        response = {
          Titulo: "Instalação de software",
          Descricao:
            "Realizamos instalação de softwares diversos, desde sistemas operacionais a aplicativos específicos para as suas necessidades. Garantimos a compatibilidade e o bom funcionamento dos programas instalados, além de oferecer suporte para configuração e utilização.",
          Unidade: "BL 2, APT 303",
          IdServico: '2',
          Avaliacao: 4.7,
          TotalAvaliacoes: '89',
          Prestador: {
            Telefone: '(21)99333-3333',
            Email: 'maria.silva@gmail.com'
          },
          Avaliacoes: [
            {
              Unidade: "BL 1, APT 101",
              Categoria: "Excelente",
              Avaliacao: 5,
              DataRegistro: '12 de março de 2024',
              Comentario: 'Instalação rápida e sem problemas. Recomendo!'
            },
            {
              Unidade: "BL 8, APT 402",
              Categoria: "Muito Bom",
              Avaliacao: 4.5,
              DataRegistro: '5 de fevereiro de 2024',
              Comentario: 'Ótimo serviço, equipe muito profissional.'
            }
          ]
        };
      } else if (serviceId === "3") {
        response = {
          Titulo: "Troca de tela de notebook",
          Descricao:
            "Oferecemos serviços especializados de troca de tela de notebooks, utilizando componentes originais e de alta qualidade. Nossos técnicos possuem vasta experiência em substituição de telas danificadas, garantindo um serviço rápido e eficiente.",
          Unidade: "BL 3, APT 404",
          IdServico: '3',
          Avaliacao: 4.9,
          TotalAvaliacoes: '200',
          Prestador: {
            Telefone: '(21)99444-4444',
            Email: 'carlos.souza@gmail.com'
          },
          Avaliacoes: [
            {
              Unidade: "BL 4, APT 303",
              Categoria: "Perfeito",
              Avaliacao: 5,
              DataRegistro: '20 de janeiro de 2024',
              Comentario: 'A troca foi feita rapidamente e meu notebook está como novo!'
            },
            {
              Unidade: "BL 2, APT 102",
              Categoria: "Muito Bom",
              Avaliacao: 4.8,
              DataRegistro: '15 de fevereiro de 2024',
              Comentario: 'Serviço de alta qualidade, muito satisfeito.'
            }
          ]
        };
      } else if (serviceId === '4') {
        response = {
          Titulo: "Configuração de rede",
          Descricao:
            "Realizamos configuração completa de redes domésticas e empresariais, incluindo instalação de roteadores, switches e pontos de acesso. Nossa equipe é especializada em criar soluções de rede seguras e eficientes, adaptadas às suas necessidades específicas.",
          Unidade: "BL 4, APT 505",
          IdServico: '4',
          Avaliacao: 4.9,
          TotalAvaliacoes: '200',
          Prestador: {
            Telefone: '(21)99555-5555',
            Email: 'ana.costa@gmail.com'
          },
          Avaliacoes: [
            {
              Unidade: "BL 4, APT 303",
              Categoria: "Perfeito",
              Avaliacao: 5,
              DataRegistro: '20 de janeiro de 2024',
              Comentario: 'A configuração foi rápida e agora minha rede está excelente!'
            },
            {
              Unidade: "BL 2, APT 102",
              Categoria: "Muito Bom",
              Avaliacao: 4.8,
              DataRegistro: '15 de fevereiro de 2024',
              Comentario: 'Serviço muito bom, minha conexão está ótima agora.'
            }
          ]
        };
      }

      resolve(response);
    }, 1000);
  });
}

