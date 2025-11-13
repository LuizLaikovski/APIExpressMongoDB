import userSchema from "../schemas/userSchema.js";
import bcrypt from "bcrypt";

export const newUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios: name, email e password." });
        }

        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Este e-mail já está cadastrado." });
        }

        const hashedPassword = await bcrypt.hash(password, 10


        )

        const newUser = await userSchema.create({ name, email, password: hashedPassword });
        
        res.status(201).json(newUser);
    } catch (err) {
        console.error("Erro ao criar usuário:", err);
        res.status(500).json({ error: "Erro interno ao criar usuário." });
    }
};

export const getUser = async (req, res) => {
    try {
        const id = req.params.idUser;

        if (!id) {
            return res.status(400).json({msg : "Id não informado"})
        }

        const user = await userSchema.findById(id);
        res.status(200).json(user)
    } catch (error) {
        console.error("Erro ao buscar usuário:", err);
        res.status(500).json({ error: "Erro interno ao buscar usuário." });
    }
    
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status("Id não informado, e campos não preenchidos");
        }

        const deleterUser = await userSchema.findByIdAndDelete(id);
        res.status(200).json({message: `O usuario do id ${id} foi deletado`})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}
