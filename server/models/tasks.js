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
        type: Date,
        // required: true,
        default: Date.now()
    }
})

const tasksModel = mongoose.model( 'tasksModel' , taskSchema)

export default tasksModel