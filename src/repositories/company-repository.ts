import prisma from "../database/db";
import { Company } from "protocols/protocols";
export async function insertCompany(company: Company) {
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
export async function updateCompany(company: Company, id: number) {
  await prisma.company.update({
    where: {
      id,
    },
    data: company,
  });
}
export async function findCompanyById(id: number) {
  const company = await prisma.company.findFirst({
    where: {
      id,
    },
    select: {
      nomeCliente: true,
      razaoSocial: true,
      cnpj: true,
      cep: true,
      endereco: true,
      numero: true,
      telefone: true,
      senha: true,
      email: true,
    },
  });
  return company;
}
export async function findCompanyByCNPJ(cnpj: string) {
  const company = await prisma.company.findFirst({
    where: {
      cnpj,
    },
    select: {
      id: true,
      nomeCliente: true,
      razaoSocial: true,
      cnpj: true,
      cep: true,
      endereco: true,
      numero: true,
      telefone: true,
    },
  });
  return company;
}
export async function deleteCompany(id: number) {
  await prisma.company.delete({
    where: {
      id: id, 
    },
  });
}
export async function getAllCompanies() {
  const companies = await prisma.company.findMany({
    select: {
      id: true,
      nomeCliente: true,
      razaoSocial: true,
      cnpj: true,
      cep: true,
      endereco: true,
      numero: true,
      telefone: true,
    },
  });
  return companies;
}
