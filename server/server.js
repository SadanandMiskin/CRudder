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

const app = express() 

app.set('views', path.join(__dirname, '../frontend/views'))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname , "./frontend/assets")))

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

// app.get('/' , (req,res)=>{
//     res.render('home')
// })

app.use('/' , createTask)
app.use('/', displayTask)
app.use('/' , deleteTask)
app.use('/' , updateTask)


app.listen(3000, ()=> {
    db().then(()=>{    
    console.log('server is listening')
    })
})