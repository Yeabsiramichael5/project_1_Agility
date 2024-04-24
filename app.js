const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send("hello get")
})

app.post('/bloge',(req,res)=>{
    res.send("hello post")
})

app.put('/hello',(req,res)=>{
    res.send("hello put")
})

app.patch('/yeab',(req,res)=>{
    res.send("hello patch")
})

app.delete('/del',(req,res)=>{
    res.send("hello delete")
})

const PORT=3000
app.listen(PORT,()=>{
    console.log("my App is working fine")
})


// Assignment:
// Create a Get, Post, Put, Patch and Delete API Endpoint and push to github