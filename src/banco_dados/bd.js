import mysql2 from 'mysql2'

const conn = mysql2.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

conn.connect((err)=>{
    if (err){
        console.log("Erro ao conectar ao banco de dados");
        throw err
    } else {
        console.log("Conectado ao banco de dados");
    }
})

export default conn