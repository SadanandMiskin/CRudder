import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import db from './config/db.js'
import createTask from './routes/createTask.js'
import displayTask from './routes/displayTask.js'
import deleteTask from './routes/deleteTask.js'
import updateTask from './routes/updateTask.js'

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import cors from 'cors'

const app = express() 

app.use(cors())


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

// app.get('/' , (req,res)=>{
//     res.render('home')
// })

app.use('/' , createTask)
app.use('/', displayTask)
app.use('/' , deleteTask)
app.use('/' , updateTask)

db().then(()=>{ 
app.listen(3000, ()=> {
    console.log('server is listening')
    })
})