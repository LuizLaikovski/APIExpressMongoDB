import express from "express";
import { deleteUser, getUser, getUserAll, newUser } from "../controller/userController.js";

const routesU = express.Router();

routesU.post("/newUser", newUser);
routesU.delete("/delete/:id", deleteUser);
routesU.get("/:idUser", getUser);
routesU.get("/", getUserAll);

export default routesU;