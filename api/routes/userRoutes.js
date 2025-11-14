import express from "express";
import { deleteUser, getUser, getUserAll, loginUser, newUser } from "../controller/userController.js";

const routesU = express.Router();

routesU.post("/newUser", newUser);
routesU.delete("/delete/:id", deleteUser);
routesU.get("/id=:idUser", getUser);
routesU.get("/all", getUserAll);
routesU.post("/login", loginUser)

export default routesU;     