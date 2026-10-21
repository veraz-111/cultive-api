import { Router } from "express";
import conn from "../banco_dados/bd.js"

const routerFazendaCadastro = Router()

routerFazendaCadastro.post("/fazenda/cadastro", (req, res)=>{
    const {nome, endereco, tamanho, cpf_usuario} = req.body

    conn.query(`insert into fazenda (nome, endereco, tamanho, cpf_usuario) values ('${nome}', '${endereco}', ${tamanho}, '${cpf_usuario}')`,  (err, result)=>{
        if (err){
            console.log("Erro ao cadastrar fazenda");
            throw err
        } else {
            console.log("Fazenda cadastrada com sucesso");
            res.status(201).json({ message: "Fazenda cadastrada com sucesso" });
        }
    })
})