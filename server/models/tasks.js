import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    taskTitle: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const tasksModel = mongoose.Model( 'tasksModel' , taskSchema)

export default tasksModel