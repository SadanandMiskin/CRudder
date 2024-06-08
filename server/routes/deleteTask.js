import express from 'express'
import tasksModel from '../models/tasks.js'
const router = express.Router()


router
    .route('/delete')
    .delete((req,res)=>{
        const {id} = req.body
        tasksModel.deleteOne({_id: id})
        .then(()=>{
            console.log('task deleted')
            res.json('Deleted')
        })
        .catch((err)=>{
            console.log(err)
        })
    })

export default router