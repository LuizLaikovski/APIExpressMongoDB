import express from "express";
import routes from "./routes/transactionsRoutes.js";
import routesU from "./routes/userRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());

connectDB();

app.use("/user", routesU);
app.use("/transactions", routes);

app.listen(PORT, () => console.log("🚀 Servidor iniciado na porta:", PORT));