
type AvaliacaoType = {
  Unidade: string;
  Categoria: string;
  Avaliacao: number;
  DataRegistro: string;
  Comentario: string;
}

type PrestadorType = {
  Telefone: string;
  Email: string;
};

export type ServicoSelecionadoType = {
  Titulo: string;
  Descricao: string;
  Unidade: string;
  IdServico: string;
  Avaliacao: number;
  TotalAvaliacoes: string;
  Prestador: PrestadorType;
  Avaliacoes: AvaliacaoType[];
};
