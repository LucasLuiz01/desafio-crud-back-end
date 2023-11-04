import { insertCompany, getAllCompanies, deleteCompany, findCompanyById, findCompanyByCNPJ } from "../repositories/company-repository";
import { Company } from "protocols/protocols";
async function insert(company: Company) {
    const companyExist = findCompanyByCNPJ(company.cnpj);
    if(companyExist){
        throw {
            name: "ConflictError",
            message: "Conflict!"
          };
    }
  await insertCompany(company);
}

async function getAll() {
 const companies = await getAllCompanies();
 return companies
}

async function deleteCompanyService (id:number) {
    const company = await findCompanyById(id);
    if(!company){
        throw {
            name: "NotFoundError",
            message: "No result for this search!",
          };
    }
    await deleteCompany(id)
}
async function findCompanyByCnpj (cnpj:string) {
    const company = await findCompanyByCNPJ(cnpj);

    return company;
}

const companyService = {
  insert,
  getAll,
  deleteCompanyService,
  findCompanyByCnpj
};

export default companyService;
