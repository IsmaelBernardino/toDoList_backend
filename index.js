import express from "express";
import routeToDO from "./routes/todo.js";
import dbConexion from "./config/dbConexion.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({
        origin: process.env.FRONT_URL,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routeToDO);

app.listen(PORT, () => console.log("servidor conectado"));

process.on("SIGINT", async () => {
    dbConexion.desconectarDB();
    process.exit(0);
});
