import Joi from "joi";

export const resgisterSchema = Joi.object({
  nomeCliente: Joi.string().required().min(5),
  senha: Joi.string().required().min(5),
  razaoSocial: Joi.string().required().min(5),
  cnpj: Joi.string().required().length(14),
  cep: Joi.string().required().length(8),
  endereco: Joi.string().required().min(5),
  numero: Joi.string().required(),
  telefone: Joi.string().required().length(11),
  email: Joi.string().required().email(),
});
