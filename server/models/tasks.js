import { name } from "ejs"
import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    taskTitle: {
        type: String,
        // required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        // required: true,
        required: true
    }
})

const tasksModel = mongoose.model( 'tasksModel' , taskSchema)

export default tasksModel