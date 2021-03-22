const express = require('express')
const mongoose=require('mongoose')


const url='mongodb+srv://m001:m001@sandbox.qhxgb.mongodb.net/student?retryWrites=true&w=majority'
const app=express()
mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection
app.use('/static',express.static('public'));
con.on('open',()=>{

    console.log('connected...')
}); 
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
}); 
app.listen(9000,()=>{
    console.log('server startd')
})