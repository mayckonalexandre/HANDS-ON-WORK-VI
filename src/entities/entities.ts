export type car = {
  id: number;
  modelo: string;
  marca: string;
  ano: number;
  cor: string;
};

export type carCreate = {
  modelo: string;
  marca: string;
  ano: number;
  cor: string;
};

export type category = {
  id: number;
  nome_categoria: string;
  capacidade_passageiros: string;
  tipo_combustivel: string;
};

export type categoryCreate = {
  nome_categoria: string;
  capacidade_passageiros: number;
  tipo_combustivel: string;
};
