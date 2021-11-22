const express=require('express')
const app=express()
const port =400
const social={
    "username":"sourav@yahoo.com",
    "follower":10,
    "following":100,
    "date":new Date()
}

const social1={
    "username":"sourav@yahoo.com",
    "follower":100,
    "following":1000,
    "date":new Date()
}

const social2={
    "username":"sourav@yahoo.com",
    "follower":500,
    "following":2000,
    "date":new Date()
}


app.get('/',(req,res)=>{
    res.status(200).send("Hello Node js")
})

app.get('/api/v1/facebook',(req,res)=>{
    
    res.status(200).json(social)
})

app.get('/api/v1/instagram',(req,res)=>{
    
    res.status(200).json(social1)
})

app.get('/api/v1/linkedin',(req,res)=>{
    
    res.status(200).json(social2)
})

app.get('/api/v1/linkedin',(req,res)=>{
    
    res.status(200).json(social2)
})

app.get('/api/v1/:id/:extra',(req,res)=>{
    
    res.status(200).json({"info":req.params.id,"extra":req.params.extra})
    //req.params.id-access the id,req.params.extra-access the extra part
})

app.listen(port,()=>{
    console.log("Server is running at port",400)

})