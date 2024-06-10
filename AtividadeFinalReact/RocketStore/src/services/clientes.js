import { Api } from "./api";

export const logar = async (login, senha) => {
  const url = "clientes/login";
  return Api.post(url, { login, senha });
};
