import "dotenv/config";
import mongoose from "mongoose";

class dbClient {
    constructor() {
        this.conectarDB();
    }

    async conectarDB() {
        try {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("DB conectado");
        } catch (error) {
            console.log(error);
        }
    }

    async desconectarDB() {
        try {
            await mongoose.disconnect();
            console.log("BD desconectado");
        } catch (error) {
            console.log("error al conectar BD");
        }
    }
}

export default new dbClient();
