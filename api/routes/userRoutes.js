import express from "express";
import { deleteUser, newUser } from "../controller/userController.js";

const routesU = express.Router();

routesU.post("/newUser", newUser);
routesU.delete("/delete/:id", deleteUser);

export default routesU;