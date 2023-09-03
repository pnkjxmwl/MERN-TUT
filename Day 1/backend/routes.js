const express= require('express')
const route= express.Router()

route.get('/car',(req,res)=>{
        const val="31";
        res.send(val)
})

module.exports= route
