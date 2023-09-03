const express =require('express')
const cors=require('cors')
const app= express()
const port=5000
app.use(cors())
const routes=require('./routes.js');

app.use('/cost',routes)

app.listen(port, ()=>{
    console.log("server started");
})