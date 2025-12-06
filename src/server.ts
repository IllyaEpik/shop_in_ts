import express from "express";


const app = express()
const PORT = 8000
const HOST = "127.0.0.1"

app.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})