const express = require("express")
const cors =require("cors")
const port = 4500
const app =express()
const {postrouter}=require("./serveur/router/postRouter")


app.use(express.json())
app.use(cors())

app.use("/",postrouter)
app.listen(port,(error)=>{
    error?console.log(error) : console.log(`serveur is runing http://localhost:${port}`)
})