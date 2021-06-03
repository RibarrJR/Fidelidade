export interface ResponseCadastroDeUsuario {
  id: number;
  createdAt: Date;
  name: string;
  avatar: string;
  CPF: number;
}

export interface RequestCadastroDeUsuario {
  Name: number;
  Password: string;
  CPF: number;
}
