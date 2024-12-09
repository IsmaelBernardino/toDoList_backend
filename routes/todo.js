import express from "express";
import toDoController from "../controller/todo.js";

const route = express.Router();

route.get("/", toDoController.getAll);
route.post("/", toDoController.create);
route.patch("/:id", toDoController.update);
route.delete("/:id", toDoController.delete);

export default route;
