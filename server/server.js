import db from './config/db.js'
import createTask from './routes/createTask.js'
import displayTask from './routes/displayTask.js'
import deleteTask from './routes/deleteTask.js'
import updateTask from './routes/updateTask.js'

import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'

const app = express() 

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.use('/' , createTask)
app.use('/', displayTask)
app.use('/' , deleteTask)
app.use('/' , updateTask)


app.listen(3000, ()=> {
    db().then(()=>{    
    console.log('server is listening')
    })
})