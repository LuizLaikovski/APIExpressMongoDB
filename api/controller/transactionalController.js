import mongoose from "mongoose"
import transactionSchema from "../schemas/transactionSchema.js"

export const newTransaction = async (req, res) => {
    try {

        if (!req.body.type || !req.body.value) {
            return res.status(400).json({ message: "Campos obrigatórios ausentes." });
        }

        const newTransactional = await transactionSchema.create(req.body)
        res.status(201).json(newTransactional);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}