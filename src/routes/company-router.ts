import { Router } from "express";
import { postCompany } from "../controllers/company-controller";
import { registerVerify } from "../middleware/company-middleware";
export const companyRouter = Router();
companyRouter
.post("/companies",registerVerify, postCompany);



