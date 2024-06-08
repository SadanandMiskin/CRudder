import express from 'express'
import db from './config/db.js'

const app = express() 


app.listen(3000, ()=> {
    db().then(()=>{    
    console.log('server is listening')
    })
})