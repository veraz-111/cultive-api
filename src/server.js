import express from "express";
import dotenv from "dotenv";

const app = express()

app.use(express.json())

app.listen(process.env.porta, ()=>{
    console.log("Server rodando");
    
})