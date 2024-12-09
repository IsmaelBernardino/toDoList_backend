import mongoose from "mongoose";
import toDoSchema from "../schema/todo.js";

class toDoModel {
    async create(todo) {
        return await toDoSchema.create(todo);
    }

    async update(id, todo) {
        return await toDoSchema.findByIdAndUpdate(
            { _id: new mongoose.Types.ObjectId(id) },
            todo,
            { new: true }
        );
    }

    async delete(id) {
        return await toDoSchema.deleteOne({
            _id: new mongoose.Types.ObjectId(id),
        });
    }

    async getAll() {
        return await toDoSchema.find();
    }
}

export default new toDoModel();
