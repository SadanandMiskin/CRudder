import express from 'express'
import tasksModel from '../models/tasks.js'
const router = express.Router()

router
    .route('/update/:id')
    .post((req,res)=>{
        const {id} = req.params
        const updatedData = req.body
        console.log(updatedData)
        tasksModel.findById({_id: id})
            .then((updatedTask)=>{
                if(!updatedTask) {
                    return res.json('Task not found')
                }
                updatedTask.taskTitle = updatedData.title
                updatedTask.taskDescription = updatedData.description
                updatedTask.dueDate = updatedData.dueDate

                updatedTask.save()
                    .then((updated)=>{
                        // console.log(updated)
                        return res.json(updated)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
              
            })
            .catch((err)=>{
                console.log(err)
            })
    })

export default router