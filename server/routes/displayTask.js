import express from 'express'
import tasksModel from '../models/tasks.js'

const router = express.Router()

router
    .route('/display')
    .get((req,res)=>{
      tasksModel.find()
        .then((tasks)=>{
            res.json(tasks)
        })         
        .catch((err)=>{
            console.log(err)
        })
    })

export default router