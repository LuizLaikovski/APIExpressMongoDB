import express from "express";
import { newTransaction } from "../controller/transactionalController.js";

const routes = express.Router();

routes.post("/newTransaction", newTransaction)

export default routes;