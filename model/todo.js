import mongoose from "mongoose";
import toDoSchema from "../schema/todo.js";

class toDoModel {
    async create(data) {
        try {
            return await toDoSchema.create(data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            return await toDoSchema.findByIdAndUpdate(
                { _id: new mongoose.Types.ObjectId(id) },
                data,
                { new: true }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id) {
        try {
            return await toDoSchema.deleteOne({
                _id: new mongoose.Types.ObjectId(id),
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try {
            return await toDoSchema.find();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new toDoModel();
