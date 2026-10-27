import { Router } from "express";
import conn from "../banco_dados/bd.js"

const routerFazendaCadastro = Router()

routerFazendaCadastro.post("/fazenda/cadastro", (req, res)=>{
    const {nome_fazenda, endereco, tamanho_hec, cpf_dono, tipo_cultura} = req.body

    conn.query(
        "insert into fazenda (nome_fazenda, endereco, tamanho_hec, cpf_dono, tipo_cultura) values (?, ?, ?, ?, ?)",
        [nome_fazenda, endereco, tamanho_hec, cpf_dono, tipo_cultura],
        (err, result)=>{
        if (err){
            console.log("Erro ao cadastrar fazenda");
            return res.status(500).json({ message: "Erro ao cadastrar fazenda" });
        } else {
            console.log("Fazenda cadastrada com sucesso");
            res.status(201).json({ message: "Fazenda cadastrada com sucesso" });
        }
    })
    
})

export default routerFazendaCadastro
