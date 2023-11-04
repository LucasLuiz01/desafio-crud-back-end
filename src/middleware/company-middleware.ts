import { resgisterSchema } from "../schemas/company-schema";
import { NextFunction, Request, Response } from "express";
export async function registerVerify(req: Request, res: Response, next: NextFunction) {
    const dados = req.body;
    const validation = resgisterSchema.validate(dados, { abortEarly: false })
    if (validation.error) {
      const error = validation.error.details.map((detail) => detail.message)
      return res.status(422).send(error);
    }
  
    next();
  }