import { Router } from "express"
import conn from "../banco_dados/bd.js"

const routerUsuarioCadastro = Router()

routerUsuarioCadastro.post("/usuario/cadastro", (req, res)=>{
    const { nome, email, senha, cpf } = req.body

    conn.query('insert into usuario (nome, email, senha, cpf) values (?, ?, ?, ?)', [nome, email, senha, cpf], (err, result)=>{
        if (err){
            console.log("Erro ao cadastrar usuário");
            throw err
        } else {
            console.log("Usuário cadastrado com sucesso");
            res.status(201).json({ message: "Usuário cadastrado com sucesso" });
        }
    })
})

export default routerUsuarioCadastro