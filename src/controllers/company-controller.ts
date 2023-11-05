import { Response, Request } from "express";
import { Company, CNPJ } from "protocols/protocols";
import companyService from "../services/company-service";
export async function postCompany(req: Request, res: Response) {
  const companies = req.body as Company;
  try {
    await companyService.insert(companies);
    return res.status(201).send("OK");
  } catch (error) {
    console.log(error);
    if (error.name == "ConflictError") {
      return res.sendStatus(409);
    }
    return res.status(400).send(error);
  }
}
export async function updateCompany(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  const companies = req.body as Company;
  try {
    await companyService.update(companies, id);
    return res.status(201).send("OK");
  } catch (error) {
    console.log(error);
    if (error.name == "NotFoundError") {
      return res.sendStatus(404);
    }
    return res.status(400).send(error);
  }
}
export async function getCompanies(req: Request, res: Response) {
  try {
    const companies = await companyService.getAll();
    return res.status(200).send(companies);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}
export async function deleteCompany(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
    await companyService.deleteCompanyService(id);
    return res.status(200).send("deletado com sucesso");
  } catch (error) {
    if (error.name == "NotFoundError") {
      return res.sendStatus(404);
    }
    return res.status(400).send(error);
  }
}
export async function getCompanieByCNPJ(req: Request, res: Response) {
  const cnpj: string = req.params.cnpj;

  try {
    const company = await companyService.findCompanyByCnpj(cnpj);
    return res.status(200).send(company);
  } catch (error) {
    return res.status(400).send(error);
  }
}
export async function getCompanieById(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
    const company = await companyService.getCompanieById(id);
    return res.status(200).send(company);
  } catch (error) {
    if (error.name == "NotFoundError") {
      return res.sendStatus(404);
    }
    return res.status(400).send(error);
  }
}
