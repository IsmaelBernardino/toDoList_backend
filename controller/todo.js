import toDoModel from "../model/todo.js";

class toDoController {
    async create(req, res) {
        try {
            const data = await toDoModel.create(req.body);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error creating task" });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await toDoModel.update(id, req.body);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error updating task" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await toDoModel.delete(id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error deleting task" });
        }
    }

    async getAll(req, res) {
        try {
            const data = await toDoModel.getAll();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error fetching tasks" });
        }
    }
}

export default new toDoController();
