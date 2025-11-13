import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true,
    },
    value: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        default: "Outros",
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model("transactions", transactionSchema)