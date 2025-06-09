import "dotenv/config";
import mongoose from "mongoose";

class dbClient {
    constructor() {
        this.conectarDB();
    }

    async conectarDB() {
        try {
            await mongoose.connect(process.env.MONGODB_URL, {
                serverSelectionTimeoutMS: 30000, // Aumenta a 30 segundos
                socketTimeoutMS: 60000, // 60 segundos para operaciones
                connectTimeoutMS: 30000, // 30 segundos para conexión inicial
                maxPoolSize: 10,
                minPoolSize: 2, // Mantiene conexiones activas
                heartbeatFrequencyMS: 10000, // Latidos cada 10 segundos
                retryWrites: true,
                retryReads: true,
                waitQueueTimeoutMS: 0, // Sin timeout para operaciones en cola
            });
            mongoose.connection.on("disconnected", () => {
                console.log("MongoDB desconectado. Reconectando...");
                this.conectarDB();
            });

            mongoose.connection.on("error", (err) => {
                console.error("Error en conexión MongoDB:", err);
            });
            console.log("DB conectado");
        } catch (error) {
            console.log("error al conectar BD", error);
            throw new Error("Error al conectar a la base de datos");
        }
    }

    async desconectarDB() {
        try {
            await mongoose.disconnect();
            console.log("BD desconectado");
        } catch (error) {
            console.log("error al conectar BD", error);
        }
    }
}

export default new dbClient();
