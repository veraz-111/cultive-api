import { Router } from "express"
import conn from "../banco_dados/bd.js"

const routerUsuarioLogin = Router()

routerUsuarioLogin.post("/usuario/login", (req, res)=>{
    const {email, senha } = req.body

    conn.query("select * from usuario where email = ? and senha = ?", [email, senha], (err, result)=>{
        if (err){
            console.log("Erro ao fazer login");
            return res.status(500).json({ message: "Erro ao fazer login" });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Email ou senha incorretos" });
        } else {
            console.log("Usuário logado com sucesso");
            res.status(200).json({ message: "Usuário logado com sucesso" });
        }
    })
})

export default routerUsuarioLogin
