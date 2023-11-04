import { Router } from "express";
import { postCompany, getCompanies, deleteCompany,getCompanieByCNPJ } from "../controllers/company-controller";
import { registerVerify } from "../middleware/company-middleware";
export const companyRouter = Router();
companyRouter
.post("/company",registerVerify, postCompany)
.get("/company",getCompanies)
.delete("/company/:id", deleteCompany)
.get("/companyByCnpj",getCompanieByCNPJ)


