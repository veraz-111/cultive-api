import { Router } from "express";
import conn from "../banco_dados/bd.js"

const routerSensor = Router()

routerSensor.post("/sensor/adicionar", (req, res)=>{
    const { id_fazenda, modelo_sensor, data_instalacao } = req.body

    conn.query(
        "insert into sensor (id_fazenda, modelo_sensor, data_instalacao) values (?, ?, ?)",
        [id_fazenda, modelo_sensor, data_instalacao],
        (err, result)=>{
        if (err){
            console.log("Erro ao adicionar sensor");
            return res.status(500).json({ message: "Erro ao adicionar sensor" });
        } else {
            console.log("Sensor adicionado com sucesso");
            res.status(201).json({ message: "Sensor adicionado com sucesso" });
        }
    })
})

export default routerSensor
