import prisma from "../database/db";
import { Company } from "protocols/protocols";
export async function insertCompany(company: Company) {
  console.log(company, "TESTANDO AQUI");
  await prisma.company.create({
    data: {
      nomeCliente: company.nomeCliente,
      senha: company.senha,
      razaoSocial: company.razaoSocial,
      cnpj: company.cnpj,
      cep: company.cep,
      endereco: company.endereco,
      numero: company.numero,
      telefone: company.telefone,
      email: company.email,
    },
  });
}
