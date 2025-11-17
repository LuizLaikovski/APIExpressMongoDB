import express from "express";
import { createTransaction, deleteTransaction, getAllTransactions, getTransaction, updateTransaction } from "../controller/transactionController.js";


const routesTransaction = express.Router();

routesTransaction.post("/newTransaction", createTransaction);
routesTransaction.get("/findOne/:id", getTransaction);
routesTransaction.get("/", getAllTransactions);
routesTransaction.put("/updateTransaction/:id", updateTransaction);
routesTransaction.delete("/delete/:id", deleteTransaction);

export default routesTransaction;