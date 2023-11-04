import express from "express";
import cors from "cors";
import { companyRouter } from "./routes/company-router";
require("dotenv").config();
const app = express();
app
.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true })) 

app.use(companyRouter)
export default app;