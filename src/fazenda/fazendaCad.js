import { Router } from "express";
import conn from "../banco_dados/bd.js"

const routerFazendaCadastro = Router()

routerFazendaCadastro.post("/fazenda/cadastro", (req, res)=>{
    const {nome_fazenda, endereco, tamanho_hec, cpf_dono} = req.body

    conn.query(`insert into fazenda (nome_fazenda, endereco, tamanho_hec, cpf_dono) values ('${nome_fazenda}', '${endereco}', ${tamanho_hec}, '${cpf_dono}')`,  (err, result)=>{
        if (err){
            console.log("Erro ao cadastrar fazenda");
            throw err
        } else {
            console.log("Fazenda cadastrada com sucesso");
            res.status(201).json({ message: "Fazenda cadastrada com sucesso" });
        }
    })
})

export default routerFazendaCadastro