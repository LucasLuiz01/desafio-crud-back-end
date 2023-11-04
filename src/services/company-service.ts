import { insertCompany } from "../repositories/company-repository";
import { Company } from "protocols/protocols";
async function insert(company:Company) {
    console.log(company, "TESTANDO NO SERVICE")
    await insertCompany(company);
}

const companyService = {insert};

export default companyService;