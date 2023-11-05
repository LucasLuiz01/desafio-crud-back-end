import {
  insertCompany,
  getAllCompanies,
  deleteCompany,
  findCompanyById,
  findCompanyByCNPJ,
  updateCompany,
} from "../repositories/company-repository";
import { Company } from "protocols/protocols";
async function insert(company: Company) {
  const companyExist = await findCompanyByCNPJ(company.cnpj);
  if (companyExist) {
    throw {
      name: "ConflictError",
      message: "Conflict!",
    }; 
  }
  await insertCompany(company);
}

async function getAll() {
  const companies = await getAllCompanies();
  return companies;
}
async function update(company: Company, id: number) {
  const compan = await findCompanyById(id);
  if (!compan) {
    throw {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  await updateCompany(company, id);
}
async function getCompanieById(id: number) {
  const compan = await findCompanyById(id);
  if (!compan) {
    throw {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  return compan;
}
async function deleteCompanyService(id: number) {
  const company = await findCompanyById(id);
  if (!company) {
    throw {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  await deleteCompany(id);
}
async function findCompanyByCnpj(cnpj: string) {
  const company = await findCompanyByCNPJ(cnpj);

  return company;
}

const companyService = {
  insert,
  getAll,
  deleteCompanyService,
  findCompanyByCnpj,
  update,
  getCompanieById,
};

export default companyService;
