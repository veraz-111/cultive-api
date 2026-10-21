import { Router } from "express"
import conn from "../banco_dados/bd.js"

const routerUsuarioLogin = Router()

routerUsuarioLogin.post("/usuario/login", (req, res)=>{
    const {email, senha } = req.body

    conn.query(`select * from usuario where email = '${email}' and senha = '${senha}'`, (err, result)=>{
        if (err){
            console.log("Erro ao fazer login");
            throw err
        } else {
            console.log("Usuário logado com sucesso");
            res.status(200).json({ message: "Usuário logado com sucesso" });
        }
    })
})

export default routerUsuarioLogin