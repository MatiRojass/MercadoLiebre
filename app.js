require("dotenv").config()

const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.join(__dirname, "/public")

const port = process.env.PORT || 4000
app.use(express.static(publicPath))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})