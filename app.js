const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app=express()

mongoose.connect(url,{UseNewUrlParser:true})
const con = mongoose.connection

con.on('open',() =>
{
    console.log('connected.....')
})
//app.use(cors())
//app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

const alienRouter = require('./controller/aliens')
app.use('/aliens',alienRouter)

app.listen(9002,()=>
{
    console.log('server connected')
})