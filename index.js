import express from "express";
import routeToDO from "./routes/todo.js";
import dbConexion from "./config/dbConexion.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({
        // origin: "*",
        origin: process.env.FRONT_URL, //http://localhost:5174/
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/task", routeToDO);

app.listen(PORT, () => console.log("servidor conectado"));

process.on("SIGINT", async () => {
    dbConexion.desconectarDB();
    process.exit(0);
});
