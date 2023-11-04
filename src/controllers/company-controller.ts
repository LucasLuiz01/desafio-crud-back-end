import { Response, Request } from "express";
import { Company } from "protocols/protocols";
import companyService from "../services/company-service";
export async function postCompany(req: Request, res: Response) {
  const companies = req.body as any;
  console.log("tentando COntroller", req.body)
  try {
    await companyService.insert(companies);
    return res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}
