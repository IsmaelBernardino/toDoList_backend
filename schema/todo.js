import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "El título es obligatorio"],
            trim: true, // Elimina espacios en blanco al inicio y final
        },
        description: {
            type: String,
            default: "", // No es obligatorio, pero puede ser útil
        },
        isCompleted: {
            type: Boolean,
            default: false, // Las tareas se crean como incompletas por defecto
        },
        dueDate: {
            type: Date,
            default: null, // Permite fechas opcionales
        },
    },
    { Timestamp: true }
);

export default mongoose.model("tareas", toDoSchema);
