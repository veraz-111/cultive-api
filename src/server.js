import dotenv from "dotenv";
dotenv.config()
import express from "express";
import routerUsuarioCadastro from "./usuario/usuarioCad.js";
import routerUsuarioLogin from "./usuario/usuarioLog.js";
import routerFazendaCadastro from "./fazenda/fazendaCad.js";
import routerLeitura from "./sensor/leitura.js";
import routerSensor from "./sensor/sensor.js";


const app = express()

app.use(express.json())
app.use(routerUsuarioCadastro)
app.use(routerUsuarioLogin)
app.use(routerFazendaCadastro)
app.use(routerLeitura)
app.use(routerSensor)

app.listen(process.env.porta, ()=>{
    console.log("Server rodando");
    
})
