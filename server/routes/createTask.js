import express from 'express'
import tasksModel from '../models/tasks.js'

const router = express.Router()

router
    .route('/create')
    .post((req,res)=> {
        const {title, description , dueDate} = req.body
        tasksModel.create({
            taskTitle: title,
            taskDescription: description,
            dueDate: dueDate
        })
        .then(()=>{
            console.log('New Task created')
           return res.json('new task created')
        })
        .catch((err)=> {
            console.log(err)
            return res.json(err)
        })
    })

export default router 