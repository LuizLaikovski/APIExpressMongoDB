import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
    console.error("❌ MONGO_URI não encontrado no .env");
    process.exit(1);
}

export const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("Mongo DB Conectado");
    } catch (error) {
        console.log("Houve um erro ao conectar o MONGODB: ", error.message);
        process.exit(1);
    }
}